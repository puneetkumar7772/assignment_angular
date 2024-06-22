import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeepDiveIntoVarianceComponent } from './dashboard/deep-dive-into-variance/deep-dive-into-variance.component';
import { FabricAnalysisComponent } from './dashboard/fabric-analysis/fabric-analysis.component';
import { NominatedFabricsComponent } from './dashboard/fabric-analysis/nominated-fabrics/nominated-fabrics.component';
import { LandPriceAnalysisComponent } from './dashboard/fabric-analysis/land-price-analysis/land-price-analysis.component';
import { VolumeEvolutionAnalysisComponent } from './dashboard/fabric-analysis/volume-evolution-analysis/volume-evolution-analysis.component';
import { LeadtimeAnalysisComponent } from './dashboard/fabric-analysis/leadtime-analysis/leadtime-analysis.component';
import { AllFabricComponent } from './dashboard/fabric-analysis/all-fabric/all-fabric.component';
import { CountryAnalysisComponent } from './dashboard/deep-dive-into-variance/country-analysis/country-analysis.component';
import { SupplierAnalysisComponent } from './dashboard/deep-dive-into-variance/supplier-analysis/supplier-analysis.component';

const routes: Routes = [
  {path:'Deep-Dive-into-Variance',component:DeepDiveIntoVarianceComponent,children:[
    { path: '', redirectTo: 'country-analysis', pathMatch: 'full' },
    { path: 'country-analysis', component: CountryAnalysisComponent },
    { path: 'supplier-analysis', component: SupplierAnalysisComponent },
  ]},
  { 
    path: 'Fabric-Analysis', 
    component: FabricAnalysisComponent, 
    children: [
      { path: '', redirectTo: 'all-Fabric', pathMatch: 'full' },
      { path: 'all-Fabric', component: AllFabricComponent },
      { path: 'nominated-Fabric', component: NominatedFabricsComponent },
      { path: 'land-price-analysis', component: LandPriceAnalysisComponent },
      { path: 'volume-evolution-analysis', component: VolumeEvolutionAnalysisComponent },
      { path: 'lead-time-analysis', component: LeadtimeAnalysisComponent }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
