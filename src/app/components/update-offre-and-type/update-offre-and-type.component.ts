import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from '../../services/admin.service';
@Component({
  selector: 'app-update-offre-and-type',
  templateUrl: './update-offre-and-type.component.html',
  styleUrls: ['./update-offre-and-type.component.css']
})
export class UpdateOffreAndTypeComponent implements OnInit {
  nom_offres: any='';
  nom_type_offre : any= '';
  id_offre_and_type : any='';
  valeur: any='';
  initial: any='';
  priorite:any='';

  nom_type_offre_init :any='';

  message : string ='';
  error_message : string ='';
  validite :boolean = false;
  constructor(private route : ActivatedRoute,private AdminService:AdminService) { }

  ngOnInit(): void {
    this.nom_type_offre = this.route.snapshot.queryParamMap.get('nom_type_offre');
    this.nom_offres = this.route.snapshot.queryParamMap.get('nom_offres');
    this.valeur = this.route.snapshot.queryParamMap.get('valeur');
    this.initial = this.route.snapshot.queryParamMap.get('initial');
    this.nom_type_offre_init=this.nom_type_offre;
    this.id_offre_and_type=this.route.snapshot.queryParamMap.get('id_offre_and_type');
  }

  check(){
    if(this.valeur<=0 || this.valeur===""  ){
      this.error_message='Veuillez saisir correctement la valeur';
    }else{
      this.validite=true;
    }
  }

  UpdateGen(){
    this.check();
    if(this.validite){
      this.UpdateTypeOffre();
    }
  }
  UpdateTypeOffre(){
      const input = {
        valeur : this.valeur
      };
  
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
  
      this.AdminService.updateOffreType(this.id_offre_and_type, input).subscribe(onSuccess, onError);
    
  }

}
