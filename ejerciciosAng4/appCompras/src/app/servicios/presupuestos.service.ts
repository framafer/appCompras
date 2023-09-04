import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators'; // Importa el operador map desde 'rxjs/operators'
import { Presupuesto } from 'src/app/modelos/presupuesto.interface';


import 'rxjs';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PresupuestosService {


  presURL = '/presupuestos.json';

  preURL = '/presupuestos';
  constructor(public http: HttpClient
  ) { }

  //    https://console.firebase.google.com/u/0/project/comprasapp-936c4/database/comprasapp-936c4-default-rtdb/data/proveedores

  postPresupuesto(presupuesto: any) {
    const newpres = JSON.stringify(presupuesto);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post(this.presURL, newpres, { headers }).pipe(
      map(res => {
        console.log(res);
        return res;
      })
    );
  }


  getPresupuestos(): Observable<{ [key: string]: Presupuesto }> {
    return this.http.get<{ [key: string]: Presupuesto }>(this.presURL);
  }


  getPresupuesto(id$: string){
    const url = `${this.preURL}/${id$}.json`;
    return this.http.get(url).pipe(
      map(res => JSON.stringify(res)
          
      ));
  }

  putPresupuesto(presupuesto: any, id$: string) {
    const newpre = JSON.stringify(presupuesto);
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' }); // Usa HttpHeaders en lugar de Headers
    const url = `${this.preURL}/${id$}.json`;
  
    return this.http.put(url, newpre, { headers }).pipe(
      map(res => {
        console.log(JSON.stringify(res)); // Corrige la impresión de res
        return res;
      })
    );
  }


}
