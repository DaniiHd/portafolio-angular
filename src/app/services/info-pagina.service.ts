import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPagina } from '../interfaces/info-pagina-interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

info: InfoPagina = {};
cargada = false;

equipo:any[] = [];

  constructor(private http: HttpClient) { 

    //console.log('servicio de info de pagina')

    //leer archivo json 
    this.CargarInfo();
    this.CargarEquipo();
    
  }
  private CargarInfo(){
    this.http.get('assets/data/data-pagina.json')
    .subscribe( (resp: InfoPagina) =>{

      this.cargada = true;
      this.info = resp;

    });
  }
  private CargarEquipo(){
    this.http.get('https://angular-html-14103.firebaseio.com/equipo.json')
    .subscribe( (resp: any[]) =>{

     this.equipo=resp;

      console.log(resp);
    });
  }
}

