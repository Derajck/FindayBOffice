import { Component, OnInit } from '@angular/core';
import { Chart } from 'node_modules/chart.js';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-my-chart',
  templateUrl: './my-chart.component.html',
  styleUrls: ['./my-chart.component.css']
})
export class MyChartComponent implements OnInit {

  stat_list=[];
  message:string='';
  constructor(private adminService : AdminService) { }

  ngOnInit(): void {
    this.getOffre();
  }

  showChart(labels,datas) {
    var myChart = new Chart("myChart", {
      type:'doughnut',
      data: {
        labels: labels,
        datasets: [{
          label: 'Offre',
          data: datas,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
      //   scales: {
      //     yAxes: [{
      //       ticks: {
      //         beginAtZero: true
      //       }
      //     }]
      //   },
        legend:{
          labels:{
            fontColor: 'white'
          }
        }
      }
    });
  }

  getOffre(){
    const onSuccess = response => {
      if (response['status'] == 200) {
        this.stat_list = response['data'];
        this.showChart(this.stat_list.map((it : any) =>it.nom_offre),this.stat_list.map((it : any) =>it.usage));
        console.log(this.stat_list?.length);
      } else {
        this.message = 'Erreur requete';
      }
    }

    const onError = response => {
      console.log("Misy erreur");
      this.message =response['exception'];
    }

    this.adminService.getchOffre().subscribe(onSuccess, onError);
  }
}
