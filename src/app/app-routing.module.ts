import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeepDiveIntoVarianceComponent } from './dashboard/deep-dive-into-variance/deep-dive-into-variance.component';
import { FabricAnalysisComponent } from './dashboard/fabric-analysis/fabric-analysis.component';

const routes: Routes = [
  {path:'Deep-Dive-into-Variance',component:DeepDiveIntoVarianceComponent},
  {path:'Fabric-Analasis',component:FabricAnalysisComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
