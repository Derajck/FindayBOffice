import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-offre-form',
  templateUrl: './offre-form.component.html',
  styleUrls: ['./offre-form.component.css']
})
export class OffreFormComponent implements OnInit {

  error_message : string = '';
  message : string = '';
  detailOffre :any;
  

  nom_offre : any = '';
  value : any = '';
  duree_valide : any ='';
  prio : any ='';

  validite :boolean = false;
  constructor(private AdminService: AdminService) { }

  ngOnInit(): void {
    this.getDetailOffres();
  }

  generalInsert(){
    this.check();
    if(this.validite){
      this.insert();
    }
  }
  insert(){
    const input = {
      nom_offre : this.nom_offre,
      value : this.value,
      duree_valide: this.duree_valide,
      priorite:this.prio
    };


    const onSuccess = response => {
      if (response['status'] == 200) {
        this.message = 'Succes modification';
      } else {
        this.error_message = 'Erreur modification';
      }
    }

    const onError = response => {
      this.error_message = 'Erreur interne';
    }

    this.AdminService.insertOffre(input).subscribe(onSuccess, onError);
  }

  check(){
    if(this.nom_offre===""){
      this.error_message='Veuillez saisir correctement le Nom';
    }if(this.value<=0 || this.value===""  ){
      this.error_message='Veuillez saisir correctement la valeur';
    }if(this.duree_valide<=0 || this.duree_valide===""  ){
      this.error_message='Veuillez saisir correctement la durée';
    }if(this.prio<=0 || this.prio===""  ){
      this.error_message='Veuillez définir correctement la priorité';
    }else{
      this.validite=true;
    }
  }

  getDetailOffres(){
    const onSuccess = response => {
      if (response['status'] == 200) {
        this.detailOffre = response['data'];
      } else {
        this.message = 'Erreur requete';
      }
    }

    const onError = response => {
      console.log("Misy erreur");
      this.message =response['exception'];
    }

    this.AdminService.getDetailOffre().subscribe(onSuccess, onError);
  }

  

}
