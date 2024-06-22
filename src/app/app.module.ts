import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './services/data.service';
import { MatCardModule } from '@angular/material/card';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { DeepDiveIntoVarianceComponent } from './dashboard/deep-dive-into-variance/deep-dive-into-variance.component';
import { FabricAnalysisComponent } from './dashboard/fabric-analysis/fabric-analysis.component';
import { MatOption } from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { NominatedFabricsComponent } from './dashboard/fabric-analysis/nominated-fabrics/nominated-fabrics.component';
import { LandPriceAnalysisComponent } from './dashboard/fabric-analysis/land-price-analysis/land-price-analysis.component';
import { VolumeEvolutionAnalysisComponent } from './dashboard/fabric-analysis/volume-evolution-analysis/volume-evolution-analysis.component';
import { LeadtimeAnalysisComponent } from './dashboard/fabric-analysis/leadtime-analysis/leadtime-analysis.component';
import { AllFabricComponent } from './dashboard/fabric-analysis/all-fabric/all-fabric.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CountryAnalysisComponent } from './dashboard/deep-dive-into-variance/country-analysis/country-analysis.component';
import { SupplierAnalysisComponent } from './dashboard/deep-dive-into-variance/supplier-analysis/supplier-analysis.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DeepDiveIntoVarianceComponent,
    FabricAnalysisComponent,
    NominatedFabricsComponent,
    LandPriceAnalysisComponent,
    VolumeEvolutionAnalysisComponent,
    LeadtimeAnalysisComponent,
    AllFabricComponent,
    CountryAnalysisComponent,
    SupplierAnalysisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxChartsModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatTableModule,
    MatToolbarModule
    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
