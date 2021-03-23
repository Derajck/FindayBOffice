import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AccueilComponent } from './accueil/accueil.component';
import { ListeComponent } from './components/liste/liste.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// import {MatProgressSpinnerModule, MatRadioModule, MatSliderModule} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { AgreeMVTComponent } from './AdminFunc/agree-mvt/agree-mvt.component';
import { MyChartComponent } from './components/my-chart/my-chart.component';
import { MyChartChAffComponent } from './components/my-chart-ch-aff/my-chart-ch-aff.component';
import { OffreFormComponent } from './components/offre-form/offre-form.component';
import { DetailOffreFormComponent } from './components/detail-offre-form/detail-offre-form.component';
import { ChartChAffJournComponent } from './components/chart-ch-aff-journ/chart-ch-aff-journ.component';
import { ChartChFrqcJournComponent } from './components/chart-ch-frqc-journ/chart-ch-frqc-journ.component';
import { CommonModule } from '@angular/common';
// import { ChartGraphComponent } from './components/chart-graph/chart-graph.component';
// import { HighchartsChartComponent } from 'highcharts-angular';
// import { ChartGraphComponent } from './AdminFunc/chart-graph/chart-graph.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    ListeComponent,
    AgreeMVTComponent,
    MyChartComponent,
    MyChartChAffComponent,
    OffreFormComponent,
    DetailOffreFormComponent,
    ChartChAffJournComponent,
    ChartChFrqcJournComponent,
    // BrowserAnimationsModule
    // MatProgressSpinnerModule
    // ChartGraphComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    // MatProgressSpinnerModule, MatRadioModule, MatSliderModule
    // MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
