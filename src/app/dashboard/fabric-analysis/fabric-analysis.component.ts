import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { Chart } from 'chart.js';

interface FabricData {
  Fabric: string;
  Composition: string;
  '2023 Supplier': string;
  '2022 Supplier': string;
  'Diff %': string;
}

@Component({
  selector: 'app-fabric-analysis',
  templateUrl: './fabric-analysis.component.html',
  styleUrls: ['./fabric-analysis.component.css']
})
export class FabricAnalysisComponent implements OnInit {

  fabricData = [
    { id: 1, name: 'All Fabric' },
    { id: 2, name: 'Nominated Fabrics' },
    { id: 3, name: 'Land Price Analysis By Season & Typology' },
    { id: 4, name: 'Volume Evolution Analysis by Season & Typology' },
    { id: 5, name: 'Leadtime Analysis by Season' },
  ];

  selectedItemId: any | null = null;

  supplierWorkingData: FabricData[] | undefined;
  volumeData: FabricData[] | undefined;
  displayedColumns: string[] = ['Fabric', 'Composition', '2023 Supplier', '2022 Supplier', 'Diff %'];

  nominatedFabricData: any;

  constructor(private router: Router, private route: ActivatedRoute, private dataservice: DataService) { }

  selectionChangedFabric(event: any) {
    event.preventDefault();
    const selectedValue = event.value;
    this.selectedItemId = selectedValue === 'null' ? null : selectedValue;
  }

  ngOnInit(): void {
    this.dataservice.getfabricsData().subscribe(data => {
      this.supplierWorkingData = data["Fabric Analysis"]["All Fabric"]["Supplier Working on Top 10 Fabrics (unique count for each fabric)"]["Fabrics"];
      this.volumeData = data["Fabric Analysis"]["All Fabric"]["Volume on Top 10 Fabrics"]["Fabrics"];
    });

    this.dataservice.getNominatedFabricData().subscribe(data => {
      this.nominatedFabricData = data;
      this.createCharts();
    });

    this.dataservice.getLoadPriceTopologyData().subscribe(data => {
      this.createLandPriceCharts(data);
    });

    this.dataservice.getVolumnEvolutionData().subscribe(data => {
      this.createVolumeEvolutionCharts(data);
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
