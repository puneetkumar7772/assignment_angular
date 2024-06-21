import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(){}
  ngOnInit(): void {
    this.createChart()
    this.createChart2()
    this.createChart3()
  }
  public chart: any;
  createChart(){
  
    this.chart = new Chart("MyChart", {
      type: 'pie', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['2021','2022','2023','2024' ], 
	       datasets: [
          {
            label: "data",
            data: ['4600','3000', '1879', '1784'],
            backgroundColor: 'yellow',
          },
          // {
          //   // label: "Profit",
          //   // data: [],
          //   // backgroundColor: 'limegreen'
          // }  
        ]
      },
      options: {
        aspectRatio:2.5
      }
      
    });
  }
  createChart2(){
  
    this.chart = new Chart("MyChart2", {
      type: 'bar', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['2021','2022','2023','2024' ], 
	       datasets: [
          {
            label: "Sales",
            data: ['4630','4000', '2879', '3784'],
            backgroundColor: 'yellow',
          },
          {
            label: "Profit",
            data: [],
            // backgroundColor: 'limegreen'
          }  
        ]
      },
      options: {
        aspectRatio:2.5
      }
      
    });
  }
  createChart3(){
  
    this.chart = new Chart("MyChart3", {
      type: 'bar', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['2021','2022','2023','2024' ], 
	       datasets: [
          {
            label: "Sales",
            data: ['4630','4000', '2879', '3784'],
            backgroundColor: 'yellow',
          },
          {
            label: "Profit",
            data: [],
            // backgroundColor: 'limegreen'
          }  
        ]
      },
      options: {
        aspectRatio:2.5
      }
      
    });
  }
}