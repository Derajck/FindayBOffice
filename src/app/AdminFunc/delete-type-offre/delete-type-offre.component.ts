import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-delete-type-offre',
  templateUrl: './delete-type-offre.component.html',
  styleUrls: ['./delete-type-offre.component.css']
})
export class DeleteTypeOffreComponent implements OnInit {
  id_offre_and_type : any ='';
  nom_offre_type : any ='';
  nom_offres : any ='';

  error_message:string ='';
  message : string ='';
  constructor(private route : ActivatedRoute,private adminService : AdminService,private router:Router) { }

  ngOnInit(): void {
    this.id_offre_and_type=this.route.snapshot.queryParamMap.get('id_offre_and_type');
    this.nom_offre_type=this.route.snapshot.queryParamMap.get('nom_offre_type');
    this.nom_offres=this.route.snapshot.queryParamMap.get('nom_offres');
  }
  agreeMvt(){
    const input = {
      validation:0
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
      this.error_message = 'Erreur requete';
    }

    this.adminService.deleteOffreType(this.id_offre_and_type).subscribe(onSuccess, onError);
  }
}
