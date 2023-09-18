import { Component } from '@angular/core';
import { FacturasService } from 'src/app/facturas/servicios/facturas.service';

@Component({
  selector: 'app-facturas',
  templateUrl: './facturas.component.html',
  styleUrls: ['./facturas.component.css']
})
export class FacturasComponent {

  facturas: any[] = [];   // Aquí uso presupuestos pero como una matriz cualquiera y solo para recibir los datos de la base de datos con el getPresupuestos.
  // La base de datos tiene un formato de objeto json en la que la tabla presupuestos está formada por nodos. En cada nodo (fila en una tabla normal),
  // hay un par de valores, key: valor  .La key es yn string y el valor es un objeto json con 7 campos, a saber: proveedor, fecha, concepto, base, tipo,
  // iva y total 

  constructor(private facturasService: FacturasService) {
    this.facturasService.getFacturas().subscribe(facturas => {
      for (const id$ in facturas) {
        if (facturas.hasOwnProperty(id$)) {
          this.facturas.push({ ...facturas[id$], id$ });
        }
      }
    });
    console.log(this.facturas);
  }

  eliminarFactura(id$: string) {
    this.facturasService.delFactura(id$)
      .subscribe(res => {
        this.facturas = [];
        this.facturasService.getFacturas().subscribe(facturas => {
          for (const id$ in facturas) {
            if (facturas.hasOwnProperty(id$)) {
              this.facturas.push({ ...facturas[id$], id$ });
            }
          }
        });
      });


  }

}
