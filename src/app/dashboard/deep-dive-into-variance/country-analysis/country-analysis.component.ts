import { Component } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-country-analysis',
  templateUrl: './country-analysis.component.html',
  styleUrls: ['./country-analysis.component.css']
})
export class CountryAnalysisComponent {
  supplierData: any;

  constructor(private dataservice: DataService) {
    Chart.register(...registerables);

  }

  ngOnInit(): void {
    this.dataservice.getData().subscribe(data => {
      this.supplierData = data;
    });
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.supplierData.forEach((supplier: any) => {
        this.createChart(supplier);
      });
    }, 500);
  }

  createChart(supplier: any): void {
    const ctx = document.getElementById(supplier.country) as HTMLCanvasElement;
    if (ctx) {
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['HIVER23', 'ETE23', 'HIVER22'],
          datasets: [{
            label: 'Quality (in pcs "000")',
            data: [supplier.quality.HIVER23, supplier.quality.ETE23, supplier.quality.HIVER22],
            backgroundColor: ['#76c7c0', '#f9c74f', '#f94144']
          }]
        },
        options: {
          responsive: true,
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    }
  }
}