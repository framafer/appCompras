import { Component } from '@angular/core';
import { ProveedoresService } from "src/app/servicios/proveedores.service";

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent {

  

  proveedores:any;

  constructor( private proveedoresService: ProveedoresService) { }

  ngOnInit() {
    this.proveedores = this.proveedoresService.getProveedores( );
    }
}
