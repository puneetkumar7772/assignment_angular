import { Component } from '@angular/core';
import { Chart } from 'chart.js';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-country-analysis',
  templateUrl: './country-analysis.component.html',
  styleUrls: ['./country-analysis.component.css']
})
export class CountryAnalysisComponent {
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getData().subscribe(data => {
      this.createChart(data);
    });
  }

  createChart(data: any): void {
    const ctx = document.getElementById('MyChart') as HTMLCanvasElement;

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: data.Data[0]['Group Analysis'].map((entry: any) => entry.Week),
        datasets: [
          {
            label: `${data.Data[0].Metric} - Group Analysis`,
            data: data.Data[0]['Group Analysis'].map((entry: any) => entry.Value),
            backgroundColor: '#3e95cd'
          },
          {
            label: `${data.Data[0].Metric} - Drop into Volume`,
            data: data.Data[0]['Drop into Volume'].map((entry: any) => entry.Value),
            backgroundColor: '#8e5ea2'
          }
        ]
      },
      options: {
       plugins:{
        title: {
          display: true,
          text: data.Data[0].Metric
        },
       },
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}