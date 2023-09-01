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
  constructor(public http: HttpClient
    ) { }

    //    https://console.firebase.google.com/u/0/project/comprasapp-936c4/database/comprasapp-936c4-default-rtdb/data/proveedores

    postPresupuesto( presupuesto: any) {
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

}
