import { Component } from '@angular/core';
import { ProveedoresService } from "src/app/servicios/proveedores.service";

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent {


  

  proveedores:any[] = [];

  constructor( private proveedoresService: ProveedoresService) {
    this.proveedoresService.getProveedores().subscribe(proveedores => {
    for (const id$ in proveedores) {
      if (proveedores.hasOwnProperty(id$)) {
        this.proveedores.push({ ...proveedores[id$], id$ });
      }
    }
  });
  console.log(this.proveedores);
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

