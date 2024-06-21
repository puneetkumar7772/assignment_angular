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

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DeepDiveIntoVarianceComponent,
    FabricAnalysisComponent
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
    MatTableModule
    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
