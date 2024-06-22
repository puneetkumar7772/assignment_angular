import { Component } from '@angular/core';
import { Chart } from 'chart.js';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-nominated-fabrics',
  templateUrl: './nominated-fabrics.component.html',
  styleUrls: ['./nominated-fabrics.component.css']
})
export class NominatedFabricsComponent {
  constructor(private dataservice:DataService){}

  
  nominatedFabricData: any;
  
  ngOnInit(){
    this.dataservice.getNominatedFabricData().subscribe(data => {
      this.nominatedFabricData = data;
      this.createCharts();
    });
  }

  createCharts(): void {
    const fabricOrigin2023 = this.nominatedFabricData.graphs.fabric_origin["2023"];
    const fabricOrigin2022 = this.nominatedFabricData.graphs.fabric_origin["2022"];
    const nominatedWeight2023 = this.nominatedFabricData.graphs.nominated_weight["2023"];
    const nominatedWeight2022 = this.nominatedFabricData.graphs.nominated_weight["2022"];
    const nominatedPrice2023 = this.nominatedFabricData.graphs.nominated_price["2023"];
    const nominatedPrice2022 = this.nominatedFabricData.graphs.nominated_price["2022"];

    new Chart("fabricOriginChart2023", {
      type: 'pie',
      data: {
        labels: fabricOrigin2023.countries,
        datasets: [{
          data: fabricOrigin2023.percentages,
          backgroundColor: ['lightpink', 'orange', '#FFCE56','#FFCE56', '#4BC0C0'],
        }]
      },
      options: {
        responsive: true,
        plugins:{
        title: {
          display: true,
          text:'Fabric Origin 2023'
        }
      }
      }
    });

    new Chart("fabricOriginChart2022", {
      type: 'pie',
      data: {
        labels: fabricOrigin2022.countries,
        datasets: [{
          data: fabricOrigin2022.percentages,
          backgroundColor: ['orange', 'lightpink', 'green', 'green', 'skyblue'],
        }]
      },
      options: {
        responsive: true,
        plugins:{
        title: {
          display: true,
          text: 'Fabric Origin 2022'
        }
      }
      }
    });

    new Chart("nominatedWeightChart", {
      type: 'pie',
      data: {
        labels: ['Nominated', 'Non-Nominated'],
        datasets: [{
          data: [nominatedWeight2023.nominated, nominatedWeight2023.non_nominated],
          backgroundColor: ['blue', 'lightpink'],
        }]
      },
      options: {
        responsive: true,
        plugins:{
        title: {
          display: true,
          text: 'Nominated Weight 2023'
        }
      }
      }
    });

    new Chart("nominatedPriceChart", {
      type: 'bar',
      data: {
        labels: ['2023', '2022'],
        datasets: [{
          label: 'Price (EUR)',
          data: [nominatedPrice2023, nominatedPrice2022],
          backgroundColor: ['green', 'lightgreen'],
        }]
      },
      options: {
        responsive: true,
        plugins:{
          title: {
            display: true,
            text: 'Nominated Price Comparison'
          }

        }      
      }
    });
  }
}
