import { Component } from '@angular/core';
import { ProveedoresService } from "src/app/servicios/proveedores.service";

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent {


  cargando: boolean;

  proveedores:any[] = [];

  constructor( private proveedoresService: ProveedoresService) {
    this.cargando = true;


    setTimeout(() => {
      this.proveedoresService.getProveedores().subscribe(proveedores => {
        for (const id$ in proveedores) {
          if (proveedores.hasOwnProperty(id$)) {
            this.proveedores.push({ ...proveedores[id$], id$ });
            
          }
          this.cargando = false;
    }})}, 3000);


    /* this.proveedoresService.getProveedores().subscribe(proveedores => {
    for (const id$ in proveedores) {
      if (proveedores.hasOwnProperty(id$)) {
        setTimeout(() =>{this.proveedores.push({ ...proveedores[id$], id$ })},1000);
        
      }
    }
    
  });
  console.log(this.proveedores);
  this.cargando = false; */
}

eliminarProveedor(id$: string) {
  this.proveedoresService.delProveedor(id$)
    .subscribe(res => {
      this.proveedores = [];
      this.proveedoresService.getProveedores().subscribe(proveedores => {
        for (const id$ in proveedores) {
          if (proveedores.hasOwnProperty(id$)) {
            this.proveedores.push({ ...proveedores[id$], id$ });
          }
        }
      });
    });


}

}

