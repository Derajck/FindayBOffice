import { Component } from '@angular/core';
import { AdminService } from './services/admin.service';
// import {MatIconModule} from '@angular/material/icon';
// import {BrowserAnimationsModule} from '@angular/platform browser/animations';
// import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BOffice';
  nbrClient:any='';
  chAff:any='';
  message:string='';
  constructor(private adminService : AdminService) { }
  ngOnInit(): void {
    this.getNbrClient();
    this.getchfrAfft();
  }

  getNbrClient(){
    const onSuccess = response => {
    if (response['status'] == 200) {
      this.nbrClient = response['data'];
    } else {
      this.message = 'Erreur requete';
    }
  }
  const onError = response => {
    console.log("Misy erreur");
    // this.message =response['exception'];
  }
  this.adminService.getCountClient().subscribe(onSuccess, onError);
  }

  getchfrAfft(){
    const onSuccess = response => {
    if (response['status'] == 200) {
      this.chAff = response['data'];
      console.log(response['data']);
    } else {
      this.message = 'Erreur requete';
    }
  }
  const onError = response => {
    console.log("Misy erreur");
    // this.message =response['exception'];
  }
  this.adminService.getTotalChAff().subscribe(onSuccess, onError);
  }
}
