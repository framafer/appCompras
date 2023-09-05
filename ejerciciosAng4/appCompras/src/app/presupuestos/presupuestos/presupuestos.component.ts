import { Component } from '@angular/core';
import { PresupuestosService } from '../../servicios/presupuestos.service';
import { Presupuesto } from 'src/app/modelos/presupuesto.interface';


@Component({
  selector: 'app-presupuestos',
  templateUrl: './presupuestos.component.html',
  styleUrls: ['./presupuestos.component.css']
})
export class PresupuestosComponent {

  presupuestos: any[] = [];   // Aquí uso presupuestos pero como una matriz cualquiera y solo para recibir los datos de la base de datos con el getPresupuestos.
                              // La base de datos tiene un formato de objeto json en la que la tabla presupuestos está formada por nodos. En cada nodo (fila en una tabla normal),
                              // hay un par de valores, key: valor  .La key es yn string y el valor es un objeto json con 7 campos, a saber: proveedor, fecha, concepto, base, tipo,
                              // iva y total 

  constructor(private presupuestosService: PresupuestosService) {
    this.presupuestosService.getPresupuestos().subscribe(presupuestos => {
      for (const id$ in presupuestos) {
        if (presupuestos.hasOwnProperty(id$)) {
          this.presupuestos.push({ ...presupuestos[id$], id$});
        }
      }
    });
    console.log(this.presupuestos);
    }

}
