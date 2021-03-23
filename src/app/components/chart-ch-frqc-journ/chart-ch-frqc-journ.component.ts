import { Component, OnInit } from '@angular/core';
import { Chart } from 'node_modules/chart.js';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-chart-ch-frqc-journ',
  templateUrl: './chart-ch-frqc-journ.component.html',
  styleUrls: ['./chart-ch-frqc-journ.component.css']
})
export class ChartChFrqcJournComponent implements OnInit {
  stat_list=[];
  message:string='';
  constructor(private adminService : AdminService) { }

  ngOnInit(): void {
    
    this.getUncheckedMbl();
    console.log(this.stat_list?.length);
    // console.log(this.current_list.map((it : any) =>it.id_client));
    // this.showChart();
  }

  showChart(labels,datas) {
    var myChart = new Chart("frequence", {
      type:'horizontalBar',
      data: {
        labels: labels,
        datasets: [{
          label: '# of Votes',
          data: datas,
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
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        },
        legend:{
          labels:{
            fontColor: 'white'
          }
        }
      }
    });
  }

  getUncheckedMbl(){
    const onSuccess = response => {
      if (response['status'] == 200) {
        this.stat_list = response['data'];
        this.showChart(this.stat_list.map((it : any) =>it.date_mvt_frequence),this.stat_list.map((it : any) =>it.frequence));
        console.log(this.stat_list?.length);
      } else {
        this.message = 'Erreur requete';
      }
    }

    const onError = response => {
      console.log("Misy erreur");
      this.message =response['exception'];
    }

    this.adminService.getFrequenceUsage().subscribe(onSuccess, onError);
  }

}
