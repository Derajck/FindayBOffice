import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../../services/admin.service';
@Component({
  selector: 'app-update-detail-cout',
  templateUrl: './update-detail-cout.component.html',
  styleUrls: ['./update-detail-cout.component.css']
})
export class UpdateDetailCoutComponent implements OnInit {
  nom_offre : any= '';
  cout: any='';
  message : string ='';
  id_appelcout : any ='';
  type_offre_appel: any='';
  id_offre_and_type:any='';
  type_modif : string ='';
  nom_type_offre_appel: any='';
  error_message : string ='';
  validite :boolean = false;
  expression : boolean=false;
  insert : boolean=false;
  update : boolean=false;
  constructor(private route : ActivatedRoute,private AdminService:AdminService,private router:Router) { }

  ngOnInit(): void {
    this.id_offre_and_type =this.route.snapshot.queryParamMap.get('id_offre_and_type');
    this.nom_offre = this.route.snapshot.queryParamMap.get('nom_offre');
    // this.id_appelcout = this.route.snapshot.queryParamMap.get('id_appelcout');
    this.cout = this.route.snapshot.queryParamMap.get('cout');
    this.type_offre_appel = this.route.snapshot.queryParamMap.get('type_offre_appel');
    this.setTypeOffreAppel(this.type_offre_appel);
    this.checkTypeModif(this.cout);
  }

  checkTypeModif(cout){
    console.log('sdasd'+cout);
    if(cout==0){
      this.type_modif='Insert';
      this.insert=true;
    }else{
      this.type_modif='Update';
      this.update=true;
      this.expression=true;
    }
  }

  setTypeOffreAppel(type_offre_appel){
    if(type_offre_appel==0){
      this.nom_type_offre_appel= 'Mêmes Opérateurs';
    }else if(type_offre_appel==1){
      this.nom_type_offre_appel= 'Opérateurs différents';
    }else{
      this.nom_type_offre_appel= 'International';
    }
  }

  check(){
    if(this.cout<=0 || this.cout===""  ){
      this.error_message='Valeur inférieure ou égale à 0';
    }else{
      this.validite=true;
    }
  }

  UpdateGen(){
    this.check();
    if(this.validite){
      this.UpdateDetailCout();
    }
  }

  InsertGen(){
    this.check();
    if(this.validite){
      this.InsertDetailCout();
    }
  }

  UpdateDetailCout(){
      const input = {
        typeappel : this.type_offre_appel,
        coutsec : this.cout
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

      this.AdminService.updateDetailCout(this.id_offre_and_type,this.type_offre_appel, input).subscribe(onSuccess, onError);
  }

  InsertDetailCout(){
    const input = {
      id_offre_and_type: this.id_offre_and_type,
      typeappel : this.type_offre_appel,
      coutsec : this.cout
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

    this.AdminService.insertDetailCout( input).subscribe(onSuccess, onError);
}

  SupprimerGen(){
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
      this.AdminService.DeleteDetailCout(this.id_offre_and_type,this.type_offre_appel).subscribe(onSuccess, onError);
  }
}
