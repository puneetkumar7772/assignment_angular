import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment_dynamic_dashboard';
  constructor(private router: Router) {
    // this.currentRoute = this.router.url;
    // console.log(this.currentRoute,"currentRoutecurrentRoute")
  }

  deepdiveData=[
    {id:1,name:'Country Analysis'},
    {id:1,name:'Supplier Analysis'},
  ]

  fabricData=[
    {id:1,name:'All Fabrices'},
    {id:1,name:'Nominated Fabrices'},
    {id:1,name:'Land Price Analysis By Season & Typology'},
    {id:1,name:'Volume Evolution Analysis by Season & Typology'},
    {id:1,name:'Leadtime Analysis by Season'},

  ]
}
