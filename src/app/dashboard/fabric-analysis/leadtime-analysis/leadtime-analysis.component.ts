import { Component } from '@angular/core';
import { Chart } from 'chart.js';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-leadtime-analysis',
  templateUrl: './leadtime-analysis.component.html',
  styleUrls: ['./leadtime-analysis.component.css']
})
export class LeadtimeAnalysisComponent {
  constructor(private dataservice:DataService){}
  ngOnInit(){

    this.dataservice.getLeadTimeAnalysisData().subscribe(data => {
      this.createLeadTimeCharts(data);
      this.createOTDCharts(data);
    });
    
  }

  createLeadTimeCharts(data: any) {
    new Chart('leadTimeSummerChart', {
      type: 'bar',
      data: {
        labels: ['ETE 21', 'ETE 22', 'ETE 23'],
        datasets: [
          {
            label: 'U2080',
            data: [
              data['Leadtime Analysis by Season']['Leadtime Summer Seasons per pyramid']['U2080']['ETE 21'],
              data['Leadtime Analysis by Season']['Leadtime Summer Seasons per pyramid']['U2080']['ETE 22'],
              data['Leadtime Analysis by Season']['Leadtime Summer Seasons per pyramid']['U2080']['ETE 23']
            ],
            backgroundColor: '#FF6384'
          },
          {
            label: 'Bottom',
            data: [
              data['Leadtime Analysis by Season']['Leadtime Summer Seasons per pyramid']['BOTTOM']['ETE 21'],
              data['Leadtime Analysis by Season']['Leadtime Summer Seasons per pyramid']['BOTTOM']['ETE 22'],
              data['Leadtime Analysis by Season']['Leadtime Summer Seasons per pyramid']['BOTTOM']['ETE 23']
            ],
            backgroundColor: '#36A2EB'
          },
          {
            label: 'Top',
            data: [
              data['Leadtime Analysis by Season']['Leadtime Summer Seasons per pyramid']['Top']['ETE 21'],
              data['Leadtime Analysis by Season']['Leadtime Summer Seasons per pyramid']['Top']['ETE 22'],
              data['Leadtime Analysis by Season']['Leadtime Summer Seasons per pyramid']['Top']['ETE 23']
            ],
            backgroundColor: '#FFCE56'
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Lead Time Summer Analysis'
          }
        },
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

    new Chart('leadTimeWinterChart', {
      type: 'bar',
      data: {
        labels: ['HIVER 21', 'HIVER 22', 'HIVER 23'],
        datasets: [
          {
            label: 'U2080',
            data: [
              data['Leadtime Analysis by Season']['Leadtime Winter Seasons per pyramid']['U2080']['HIVER 21'],
              data['Leadtime Analysis by Season']['Leadtime Winter Seasons per pyramid']['U2080']['HIVER 22'],
              data['Leadtime Analysis by Season']['Leadtime Winter Seasons per pyramid']['U2080']['HIVER 23']
            ],
            backgroundColor: '#FF6384'
          },
          {
            label: 'Bottom',
            data: [
              data['Leadtime Analysis by Season']['Leadtime Winter Seasons per pyramid']['BOTTOM']['HIVER 21'],
              data['Leadtime Analysis by Season']['Leadtime Winter Seasons per pyramid']['BOTTOM']['HIVER 22'],
              data['Leadtime Analysis by Season']['Leadtime Winter Seasons per pyramid']['BOTTOM']['HIVER 23']
            ],
            backgroundColor: '#36A2EB'
          },
          {
            label: 'Top',
            data: [
              data['Leadtime Analysis by Season']['Leadtime Winter Seasons per pyramid']['Top']['HIVER 21'],
              data['Leadtime Analysis by Season']['Leadtime Winter Seasons per pyramid']['Top']['HIVER 22'],
              data['Leadtime Analysis by Season']['Leadtime Winter Seasons per pyramid']['Top']['HIVER 23']
            ],
            backgroundColor: '#FFCE56'
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Lead Time Winter Analysis'
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

  createOTDCharts(data: any) {
    new Chart('otdPerformanceChart', {
      type: 'bar',
      data: {
        labels: ['2020', '2021', '2022', '2023'],
        datasets: [
          {
            label: 'Very Late',
            data: [data['Ontime Delivery (OTD) Performance']['2020'][4], data['Ontime Delivery (OTD) Performance']['2021'][4], data['Ontime Delivery (OTD) Performance']['2022'][2], data['Ontime Delivery (OTD) Performance']['2023'][0]],
            backgroundColor: '#FF6384'
          },
          {
            label: 'Late',
            data: [data['Ontime Delivery (OTD) Performance']['2020'][3], data['Ontime Delivery (OTD) Performance']['2021'][3], data['Ontime Delivery (OTD) Performance']['2022'][1], data['Ontime Delivery (OTD) Performance']['2023'][0]],
            backgroundColor: '#FF9F40'
          },
          {
            label: 'On Time',
            data: [data['Ontime Delivery (OTD) Performance']['2020'][2], data['Ontime Delivery (OTD) Performance']['2021'][2], data['Ontime Delivery (OTD) Performance']['2022'][0], data['Ontime Delivery (OTD) Performance']['2023'][0]],
            backgroundColor: '#FFCE56'
          },
          {
            label: 'Early',
            data: [data['Ontime Delivery (OTD) Performance']['2020'][1], data['Ontime Delivery (OTD) Performance']['2021'][1], data['Ontime Delivery (OTD) Performance']['2022'][0], data['Ontime Delivery (OTD) Performance']['2023'][0]],
            backgroundColor: '#4BC0C0'
          },
          {
            label: 'Very Early',
            data: [data['Ontime Delivery (OTD) Performance']['2020'][0], data['Ontime Delivery (OTD) Performance']['2021'][0], data['Ontime Delivery (OTD) Performance']['2022'][0], data['Ontime Delivery (OTD) Performance']['2023'][0]],
            backgroundColor: '#36A2EB'
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Ontime Delivery (OTD) Performance'
          }
        },
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

    new Chart('otdAnalysisChart', {
      type: 'bar', // Initially set type to bar
      data: {
          labels: ['2020', '2021', '2022', '2023'],
          datasets: [
              {
                  type: 'bar',
                  label: 'Very Late',
                  data: [data[''], data['Ontime Delivery (OTD) Performance']['2021'][0], data['Ontime Delivery (OTD) Performance']['2022'][0], data['Ontime Delivery (OTD) Performance']['2023'][0]],
                  backgroundColor: '#FF6384'
              },
              {
                  type: 'bar',
                  label: 'Late',
                  data: [data[''], data['Ontime Delivery (OTD) Performance']['2021'][1], data['Ontime Delivery (OTD) Performance']['2022'][1],data['Ontime Delivery (OTD) Performance']['2023'][1]],
                  backgroundColor: '#FF9F40'
              },
              {
                  type: 'bar',
                  label: 'On Time',
                  data: [data[''], data['Ontime Delivery (OTD) Performance']['2021'][2], data['Ontime Delivery (OTD) Performance']['2022'][2], data['Ontime Delivery (OTD) Performance']['2023'][2]],
                  backgroundColor: '#FFCE56'
              },
              {
                  type: 'bar',
                  label: 'Early',
                  data: [data[''], data[''],0, 0],
                  backgroundColor: '#4BC0C0'
              },
              {
                  type: 'line',
                  label: 'Blue',
                  data: [data['Ontime Delivery (OTD) Analysis']['2020']['Blue'], data['Ontime Delivery (OTD) Analysis']['2021']['Blue'], data['Ontime Delivery (OTD) Analysis']['2022']['Blue'], data['Ontime Delivery (OTD) Analysis']['2023']['Blue']],
                  borderColor: '#36A2EB',
                  fill: false,
                  yAxisID: 'line-y-axis'
              },
              {
                  type: 'line',
                  label: 'Green',
                  data: [data['Ontime Delivery (OTD) Analysis']['2020']['Green'], data['Ontime Delivery (OTD) Analysis']['2021']['Green'], data['Ontime Delivery (OTD) Analysis']['2022']['Green']],
                  borderColor: '#4BC0C0',
                  fill: false,
                  yAxisID: 'line-y-axis'
              },
              {
                  type: 'line',
                  label: 'Orange',
                  data: [data['Ontime Delivery (OTD) Analysis']['2020']['Orange'], data['Ontime Delivery (OTD) Analysis']['2021']['Orange'], data['Ontime Delivery (OTD) Analysis']['2022']['Orange']],
                  borderColor: '#FF9F40',
                  fill: false,
                  yAxisID: 'line-y-axis'
              }
          ]
      },
      options: {
          responsive: true,
          plugins: {
              title: {
                  display: true,
                  text: 'Ontime Delivery (OTD) Analysis'
              }
          },
          scales: {
              y: {
                  beginAtZero: true
              },
              'line-y-axis': {
                  type: 'linear',
                  position: 'right',
                  beginAtZero: true
              }
          }
      }
  });
}
}
