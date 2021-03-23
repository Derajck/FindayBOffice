import { Component, OnInit } from '@angular/core';
import {AdminService} from 'src/app/services/admin.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  current_list=[];
  constructor(private adminService : AdminService) { }

  message:string='';

  ngOnInit(): void {
    this.getUncheckedMbl();
    // console.log(this.current_list?.length);
  }

  getUncheckedMbl(){
    const onSuccess = response => {
      if (response['status'] == 200) {
        this.current_list = response['data'];
        // console.log(this.current_list?.length);
      } else {
        this.message = 'Erreur requete';
      }
    }

    const onError = response => {
      console.log("Misy erreur");
      this.message =response['exception'];
      ;
    }

    this.adminService.getNonValidateMvt().subscribe(onSuccess, onError);
  }

}
