import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-detail-offre-form',
  templateUrl: './detail-offre-form.component.html',
  styleUrls: ['./detail-offre-form.component.css']
})
export class DetailOffreFormComponent implements OnInit {

  error_message : string = '';
  message : string = '';
  liste_offre: any;
  type_offre:any ;
  validite :boolean = false;

  offre : any = '';
  MoAr : any = '';
  type : string ='';
  constructor(private AdminService:AdminService) { }

  ngOnInit(): void {
    this.getOffres();
    this.getTypeOffres();
  }

  generalInsert(){
    this.check();
    if(this.validite)
      this.insert();
  }

  check(){
    if(this.offre===""){
      this.error_message='Veuillez choisir l offre';
    }if(this.MoAr<=0 || this.MoAr===""  ){
      this.error_message='Veuillez saisir correctement la valeur';
    }if(this.type===""){
      this.error_message='Veuillez définir correctement le type d offre';
    }else{
      this.validite=true;
    }
  }
  insert(){
    const input = {
      nom_offre : this.offre,
      valeur : this.MoAr,
      nom_type_offre: this.type
    };

    console.log( this.offre);

    const onSuccess = response => {
      if (response['status'] == 200) {
        this.message = 'Succes modification';
      } else {
        this.error_message = 'Erreur modification';
      }
      console.log(response);
    }

    const onError = response => {
      this.error_message = 'Erreur interne';
    }
    this.AdminService.insertOffreType(input).subscribe(onSuccess, onError);
  }

  getOffres(){
    const onSuccess = response => {
      if (response['status'] == 200) {
        this.liste_offre = response['data'];
      } else {
        this.message = 'Erreur requete';
      }
    }

    const onError = response => {
      console.log("Misy erreur");
      this.message =response['exception'];
    }
    this.AdminService.getOffre().subscribe(onSuccess, onError);
  }

  getTypeOffres(){
    const onSuccess = response => {
      if (response['status'] == 200) {
        this.type_offre = response['data'];
      } else {
        this.message = 'Erreur requete';
      }
    }

    const onError = response => {
      console.log("Misy erreur");
      this.message =response['exception'];
    }

    this.AdminService.getTypeOffre().subscribe(onSuccess, onError);
  }
}
