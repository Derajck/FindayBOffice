import { BrowserModule } from '@angular/platform-browser';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';s

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
import { LoginComponent } from './components/login/login.component';
import { UpdateOffreComponent } from './components/update-offre/update-offre.component';
import { UpdateOffreAndTypeComponent } from './components/update-offre-and-type/update-offre-and-type.component';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { DeleteTypeOffreComponent } from './AdminFunc/delete-type-offre/delete-type-offre.component'; 
import {MatIconModule} from '@angular/material/icon'

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
    LoginComponent,
    UpdateOffreComponent,
    UpdateOffreAndTypeComponent,
    DeleteTypeOffreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule,
    MatIconModule
    // Ng4LoadingSpinnerModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}