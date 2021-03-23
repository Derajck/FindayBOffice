import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AgreeMVTComponent } from './AdminFunc/agree-mvt/agree-mvt.component';
import { DetailOffreFormComponent } from './components/detail-offre-form/detail-offre-form.component';
import { OffreFormComponent } from './components/offre-form/offre-form.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from "@angular/common";

const routes: Routes = [
  { path: 'liste', component: AccueilComponent  },
  { path: 'liste/agreement', component: AgreeMVTComponent },
  { path: 'offres', component: OffreFormComponent },
  // { path: 'offres', component: DetailOffreFormComponent }
  
];

@NgModule({
  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
