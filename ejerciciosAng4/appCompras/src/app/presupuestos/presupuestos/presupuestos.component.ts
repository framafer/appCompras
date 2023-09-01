import { Component } from '@angular/core';
import { PresupuestosService } from '../../servicios/presupuestos.service';
import { Presupuesto } from 'src/app/modelos/presupuesto.interface';


@Component({
  selector: 'app-presupuestos',
  templateUrl: './presupuestos.component.html',
  styleUrls: ['./presupuestos.component.css']
})
export class PresupuestosComponent {

  presupuestos: Presupuesto[] = [];

  constructor(private presupuestosService: PresupuestosService) {
    this.presupuestosService.getPresupuestos().subscribe(presupuestos => {
      for (const id$ in presupuestos) {
        if (presupuestos.hasOwnProperty(id$)) {
          this.presupuestos.push({ ...presupuestos[id$], id$ } as Presupuesto);
        }
      }
    });
    }

}
