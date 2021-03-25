import { Injectable } from '@angular/core';
import { base_url } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { ToolsService } from './tools.service';
// import { exception } from 'node:console';
// import { ToolsService } from './tools.service';
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http : HttpClient, private toolsServ : ToolsService) { }

  getNonValidateMvt () {
    return this.http.get(base_url + '/depotnonvalide');
  }

  getchAff () {
    return this.http.get(base_url + '/chiffreaffaire');
  }

  getchAffJourn () {
    return this.http.get(base_url + '/stat/chaffjour');
  }

  getFrequenceUsage(){
    return this.http.get(base_url + '/stat/frequsage');
  }

  getCountClient(){
    return this.http.get(base_url + '/stat/client');
  }

  getTotalChAff(){
    return this.http.get(base_url + '/stat/totalchaff');
  }

  getTypeOffre(){
    return this.http.get(base_url + '/typeoffre');
  }

  getOffre(){
    // const options = this.toolsServ.formOption(); 
    return this.http.get(base_url + '/offre');
  }

  getDetailOffre(){
    return this.http.get(base_url + '/detailoffre');
  }

  getchOffre () {
    return this.http.get(base_url + '/offrebempividy');
  }

  insertOffre (input) {
      console.log(input);
      const options = this.toolsServ.formOption(); 
      return this.http.post(base_url + '/saveoffre', input, options);
  }

  insertTypeOffre (input) {
    console.log(input);
    const options = this.toolsServ.formOption(); 
    return this.http.post(base_url + '/savetypeoffre', input, options);
}

insertOffreType (input) {
  console.log(input);
  const options = this.toolsServ.formOption(); 
  return this.http.post(base_url + '/saveoffreandtype', input, options);
}

  accept (idmvt,input) {
    const options = this.toolsServ.formOption(); // headers
    return this.http.get(base_url + '/depotvalide/'+idmvt );
  }

  updateOffre (nomOffre, input) {
    const options = this.toolsServ.formOption(); // headers
    return this.http.put(base_url + '/offreupdate/' + nomOffre, input, options);
  }

  updateOffreType (idOffreType, input) {
    const options = this.toolsServ.formOption(); // headers
    return this.http.put(base_url + '/updateoffreandtype/' + idOffreType, input, options);
  }

  deleteOffreType (idOffreType) {
    const options = this.toolsServ.formOption(); // headers
    return this.http.delete(base_url + '/deleteoffreandtype/' + idOffreType, options);
  }
  
}
