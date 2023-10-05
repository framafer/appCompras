import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators'; // Importa el operador map desde 'rxjs/operators'
import 'rxjs';
import { Observable } from 'rxjs';
import { Factura } from '../modelos/factura';

@Injectable({
  providedIn: 'root'
})
export class FacturasService {

  presURL = 'https://comprasapp-936c4-default-rtdb.europe-west1.firebasedatabase.app/facturas.json';
  preURL = '/facturas';
  
  /* presURL = '/facturas.json';
  preURL = '/facturas'; */

  constructor(public http: HttpClient
    ) { }

    //    https://console.firebase.google.com/u/0/project/comprasapp-936c4/database/comprasapp-936c4-default-rtdb/data/proveedores

    postFactura( factura: any) {
      const newpres = JSON.stringify(factura);
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


    getFacturas(): Observable<{ [key: string]: Factura }> {
      return this.http.get<{ [key: string]: Factura }>(this.presURL);
    }


    getFactura(id$: string):Observable<any>{
      const url = `${this.preURL}/${id$}.json`;
      return this.http.get(url).pipe(
        
        map(res => res));
    }


    putFactura( factura: any, id$: string) {
      const newpre = JSON.stringify(factura);
      const headers = new HttpHeaders({
      'Content-Type': 'application/json'
      });
      const url = `${ this.preURL }/${ id$ }.json`;
      return this.http.put( url, newpre, {headers}).pipe(
      map( res => {
      console.log(res);
      return res;    // Esto devuelve un objeto json
      }))
    }
    
  
    delFactura ( id$: string ) {
      const url = `${ this.preURL }/${ id$ }.json`;
      return this.http.delete( url ).pipe(map( res => res));
      
    }
    

}


