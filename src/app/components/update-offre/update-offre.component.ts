import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../../services/admin.service';
// import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-update-offre',
  templateUrl: './update-offre.component.html',
  styleUrls: ['./update-offre.component.css']
})
export class UpdateOffreComponent implements OnInit {

  nom_offre : any= '';
  cout: any='';
  duree_valide: any='';
  priorite:any='';
  nom_offre_init :any='';
  message : string ='';
  error_message : string ='';
  validite :boolean = false;
  constructor(private route : ActivatedRoute,private AdminService:AdminService,private router:Router) { }

  ngOnInit(): void {
    this.nom_offre = this.route.snapshot.queryParamMap.get('nom_offre');
    this.cout = this.route.snapshot.queryParamMap.get('cout');
    this.duree_valide = this.route.snapshot.queryParamMap.get('validite');
    this.priorite = this.route.snapshot.queryParamMap.get('priorite');
    this.nom_offre_init=this.nom_offre;
  }

  check(){
    if(this.nom_offre===""){
      this.error_message='Veuillez saisir correctement le Nom';
    }if(this.cout<=0 || this.cout===""  ){
      this.error_message='Veuillez saisir correctement la valeur';
    }if(this.duree_valide<0 || this.duree_valide===""  ){
      this.error_message='Veuillez saisir correctement la durée';
    }if(this.priorite<=0 || this.priorite===""  ){
      this.error_message='Veuillez définir correctement la priorité';
    }else{
      this.validite=true;
    }
  }

  UpdateGen(){
    this.check();
    if(this.validite){
      this.UpdateOffre();
    }
  }
  UpdateOffre(){
      const input = {
        nom_offre : this.nom_offre,
        value : this.cout,
        priorite : this.priorite,
        duree_valide : this.duree_valide
      };

      const onSuccess = response => {
        if (response['status'] == 200) {
          this.message = 'Succes modification';
          this.router.navigate(['/offres']);
        } else {
          this.error_message = 'Erreur modification';
        }
        console.log(response);

      }

      const onError = response => {
        this.error_message = 'Erreur interne';
      }

      this.AdminService.updateOffre(this.nom_offre_init, input).subscribe(onSuccess, onError);
  }

}
