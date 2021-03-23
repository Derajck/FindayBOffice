import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-agree-mvt',
  templateUrl: './agree-mvt.component.html',
  styleUrls: ['./agree-mvt.component.css']
})
export class AgreeMVTComponent implements OnInit {

  idmvt : any ='';
  value : any ='';
  num: any ='';
  date_mvt :any ='';
  
  error_message:string ='';
  message : string ='';

  constructor(private route : ActivatedRoute,private adminService : AdminService) { }

  ngOnInit(): void {
    this.idmvt=this.route.snapshot.queryParamMap.get('idmvt');
    this.value=this.route.snapshot.queryParamMap.get('value');
    this.num=this.route.snapshot.queryParamMap.get('num');;
    this.date_mvt =this.route.snapshot.queryParamMap.get('date_mvt');;
  }

  agreeMvt(){
    const input = {
      validation:0
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
      this.error_message = 'Erreur requete';
    }

    this.adminService.accept(this.idmvt, input).subscribe(onSuccess, onError);
  }

}
