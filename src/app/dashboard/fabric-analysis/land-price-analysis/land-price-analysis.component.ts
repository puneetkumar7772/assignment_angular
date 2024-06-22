import { Component } from '@angular/core';
import { Chart } from 'chart.js';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-land-price-analysis',
  templateUrl: './land-price-analysis.component.html',
  styleUrls: ['./land-price-analysis.component.css']
})
export class LandPriceAnalysisComponent {
  constructor(private dataservice:DataService){}
  
  ngOnInit(){
    this.dataservice.getLoadPriceTopologyData().subscribe(data => {
      this.createLandPriceCharts(data);
    });
  }

  createLandPriceCharts(data: any): void {
    const summerData = data["LP Summer Seasons (EUR)"];
    const winterData = data["LP Winter Seasons (EUR)"];

    new Chart("summerChart", {
      type: 'bar',
      data: {
        labels: ['U2080', 'Bottom', 'Top'],
        datasets: [
          {
            label: 'ETE 21',
            data: [summerData.U2080["ETE 21"], summerData.Bottom["ETE 21"], summerData.Top["ETE 21"]],
            backgroundColor: 'lightblue'
          },
          {
            label: 'ETE 22',
            data: [summerData.U2080["ETE 22"], summerData.Bottom["ETE 22"], summerData.Top["ETE 22"]],
            backgroundColor: 'lightgray'
          },
          {
            label: 'ETE 23',
            data: [summerData.U2080["ETE 23"], summerData.Bottom["ETE 23"], summerData.Top["ETE 23"]],
            backgroundColor: 'blue'
          }
        ]
      },
      options: {
        responsive: true,
        plugins:{
          title: {
            display: true,
            text: 'Land Price Summer Seasons (EUR)'
          }
        },
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

    new Chart("winterChart", {
      type: 'bar',
      data: {
        labels: ['U2080', 'Bottom', 'Top'],
        datasets: [
          {
            label: 'ETE 21',
            data: [winterData.U2080["ETE 21"], winterData.Bottom["ETE 21"], winterData.Top["ETE 21"]],
            backgroundColor: 'darkblue'
          },
          {
            label: 'ETE 22',
            data: [winterData.U2080["ETE 22"], winterData.Bottom["ETE 22"], winterData.Top["ETE 22"]],
            backgroundColor: 'yellow'
          },
          {
            label: 'ETE 23',
            data: [winterData.U2080["ETE 23"], winterData.Bottom["ETE 23"], winterData.Top["ETE 23"]],
            backgroundColor: 'blue'
          },
          {
            label: 'ETE 24',
            data: [winterData.U2080["ETE 24"], winterData.Bottom["ETE 24"], winterData.Top["ETE 24"]],
            backgroundColor: 'skyblue'
          }
        ]
      },
      options: {
        responsive: true,
        plugins:{
          title: {
            display: true,
            text: 'Land Price Winter Seasons (EUR)'
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
