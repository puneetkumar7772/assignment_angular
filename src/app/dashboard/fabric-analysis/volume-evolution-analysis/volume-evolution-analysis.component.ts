import { Component } from '@angular/core';
import { Chart } from 'chart.js';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-volume-evolution-analysis',
  templateUrl: './volume-evolution-analysis.component.html',
  styleUrls: ['./volume-evolution-analysis.component.css']
})
export class VolumeEvolutionAnalysisComponent {
  constructor(private dataservice:DataService){}
  
  ngOnInit(){
    this.dataservice.getVolumnEvolutionData().subscribe(data => {
      this.createVolumeEvolutionCharts(data);
    });
    
  }

  createVolumeEvolutionCharts(data: any): void {
    const eteData = data["Volume_Evolution_per_Season_Typo_Summer_ETE"];
    const hiverData = data["Volume_Evolution_per_Season_Typo_Summer_HIVER"];

    new Chart("volumeEvolutionETEChart", {
      type: 'bar',
      data: {
        labels: ['ETE 21', 'ETE 22', 'ETE 23'],
        datasets: [
          {
            label: 'Top',
            data: [eteData.ETE_21.Top, eteData.ETE_22.Top, eteData.ETE_23.Top],
            backgroundColor: '#DDA0DD'
          },
          {
            label: 'Bottom',
            data: [eteData.ETE_21.Bottom, eteData.ETE_22.Bottom, eteData.ETE_23.Bottom],
            backgroundColor: '#87CEFA'
          },
          {
            label: 'U2080',
            data: [eteData.ETE_21.U2080, eteData.ETE_22.U2080, eteData.ETE_23.U2080],
            backgroundColor: '#20B2AA'
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Volume Evolution per Season & Typo-Summer (ETE)'
          }
        },
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

    new Chart("volumeEvolutionHIVERChart", {
      type: 'bar',
      data: {
        labels: ['HIVER 21', 'HIVER 22'],
        datasets: [
          {
            label: 'Top',
            data: [hiverData.HIVER_21.Top, hiverData.HIVER_22.Top],
            backgroundColor: '#DDA0DD'
          },
          {
            label: 'Bottom',
            data: [hiverData.HIVER_21.Bottom, hiverData.HIVER_22.Bottom],
            backgroundColor: '#87CEFA'
          },
        ]
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Volume Evolution per Season & Typo-Summer (HIVER)'
          }
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
