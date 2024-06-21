import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Chart } from 'chart.js/auto';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-deep-dive-into-variance',
  templateUrl: './deep-dive-into-variance.component.html',
  styleUrls: ['./deep-dive-into-variance.component.css']
})
export class DeepDiveIntoVarianceComponent implements OnInit, AfterViewInit {
  deepdiveData = [
    { id: 1, name: 'Country Analysis' },
    { id: 2, name: 'Supplier Analysis' },
  ];

  selectedItemId: any | null = null;
  countries: any[] = [];
  chart: any;

  constructor(private router: Router, private route: ActivatedRoute, private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getData().subscribe(data => {
      this.countries = data.countries;
      console.log(this.countries,"==========================")
      this.createChart();
    });
  }

  ngAfterViewInit(): void {
    if (this.countries.length) {
      this.createChart();
    }
  }

  selectionChanged(event: any): void {
    event.preventDefault();
    const selectedValue = event.value;
    this.selectedItemId = selectedValue === 'null' ? null : selectedValue;
  }

  createChart(): void {
    if (!this.countries.length) {
      return;
    }

    const labels = this.countries.map(country => country.name);
    const presentYearQualityData = this.countries.map(country => country.quality.presentYear);
    const pastYearQualityData = this.countries.map(country => country.quality.pastYear);

    const presentYearMixData = this.countries.map(country => country.launchProductMix.presentYear);
    const pastYearMixData = this.countries.map(country => country.launchProductMix.pastYear);

    const ctx: any = document.getElementById('MyChart') as HTMLCanvasElement;
    if (this.chart) {
      this.chart.destroy();
    }

    this.chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Present Year Quality',
            data: presentYearQualityData,
            backgroundColor: 'rgba(54, 162, 235, 0.6)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
          },
          {
            label: 'Past Year Quality',
            data: pastYearQualityData,
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
          },
          {
            label: 'Present Year Launch Product Mix',
            data: presentYearMixData,
            backgroundColor: 'rgba(153, 102, 255, 0.6)',
            borderColor: 'rgba(153, 102, 255, 1)',
            borderWidth: 1
          },
          {
            label: 'Past Year Launch Product Mix',
            data: pastYearMixData,
            backgroundColor: 'rgba(255, 159, 64, 0.6)',
            borderColor: 'rgba(255, 159, 64, 1)',
            borderWidth: 1
          }
        ]
      },
      options: {
        responsive: true,
        scales: {
          x: {
            beginAtZero: true
          },
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}
