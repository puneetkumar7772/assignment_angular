import { Component } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-supplier-analysis',
  templateUrl: './supplier-analysis.component.html',
  styleUrls: ['./supplier-analysis.component.css']
})
export class SupplierAnalysisComponent {
  supplierData: any[];

  constructor(private dataservice: DataService) {
    Chart.register(...registerables);
    this.supplierData = [];
  }

  ngOnInit(): void {
    this.dataservice.getsupplierData().subscribe(data => {
      this.supplierData = data;
      this.createCharts();
    });
  }

  createCharts() {
    setTimeout(() => {
      this.supplierData.forEach((supplier: any, index: number) => {
        const ctx = document.getElementById(`chart${index}`) as HTMLCanvasElement | null;
        if (ctx) {
          new Chart(ctx, {
            type: 'bar',
            data: {
              labels: ['HVER23', 'ETE23', 'HVER22'],
              datasets: [{
                label: 'Quality (in pcs "000")',
                data: [supplier.quality.HVER23, supplier.quality.ETE23, supplier.quality.HVER22],
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
      });
    }, 0);
  }
}