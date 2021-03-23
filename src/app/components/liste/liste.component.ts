import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {
  @Input() MvlNonValide: any[] | undefined;
  message : string ='';
  constructor() { }

  ngOnInit(): void {
    this.message="Shalama lekoum, AH lekoum eh Sallam, Sallam Ah lekoum"
  }

}
