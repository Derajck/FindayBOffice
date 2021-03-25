import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AgreeMVTComponent } from './AdminFunc/agree-mvt/agree-mvt.component';
import { DetailOffreFormComponent } from './components/detail-offre-form/detail-offre-form.component';
import { OffreFormComponent } from './components/offre-form/offre-form.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from "@angular/common";
import { LoginComponent } from './components/login/login.component';
import { UpdateOffreComponent } from './components/update-offre/update-offre.component';
import { UpdateOffreAndTypeComponent } from './components/update-offre-and-type/update-offre-and-type.component';
import { DeleteTypeOffreComponent } from './AdminFunc/delete-type-offre/delete-type-offre.component';

const routes: Routes = [
    // { path: '', component: LoginComponent},
    { path: 'liste', component: AccueilComponent},
    { path: 'login', component: LoginComponent },
    { path: 'liste/agreement', component: AgreeMVTComponent },
    { path: 'offres', component: OffreFormComponent },
    { path: 'offres/modifierOffre', component: UpdateOffreComponent},
    { path: 'offres/modifierTypeOffre', component: UpdateOffreAndTypeComponent },
    { path: 'offres/deleteTypeOffre', component: DeleteTypeOffreComponent },
];

@NgModule({
  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
