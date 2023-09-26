import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators'; // Importa el operador map desde 'rxjs/operators'


import 'rxjs';
import { Observable } from 'rxjs';
import { Proveedor } from '../modelos/proveedor.interface';


@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {


  presURL = '/proveedores.json';
  preURL = '/proveedores';

  constructor(public http: HttpClient
    ) { }

    //    https://console.firebase.google.com/u/0/project/comprasapp-936c4/database/comprasapp-936c4-default-rtdb/data/proveedores

    postProveedor( proveedor: any) {
      const newpres = JSON.stringify(proveedor);
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


    getProveedores(): Observable<{ [key: string]: Proveedor }> {
      return this.http.get<{ [key: string]: Proveedor }>(this.presURL);
    }


    getProveedor(id$: string){
      const url = `${this.preURL}/${id$}.json`;
      return this.http.get(url).pipe(
        
        map(res => res));
    }


    putProveedor( proveedor: any, id$: string) {
      const newpre = JSON.stringify(proveedor);
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
    
  
    delProveedor ( id$: string ) {
      const url = `${ this.preURL }/${ id$ }.json`;
      return this.http.delete( url ).pipe(map( res => res));
      
    }
    

}
