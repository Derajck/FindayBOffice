import { Component, OnInit, Input } from '@angular/core';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
// import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {
  @Input() MvlNonValide: any[] | undefined;
  message : string ='';
  loading: boolean | undefined;
  
  constructor(private SpinnerService: Ng4LoadingSpinnerService) {
   }

  ngOnInit(): void {
    this.show();
    this.message="Shalama lekoum, AH lekoum eh Sallam, Sallam Ah lekoum"
  }

  show(){
    this.SpinnerService.show();
    setTimeout(()=>this.SpinnerService.hide(),3000)
  }

  
}
