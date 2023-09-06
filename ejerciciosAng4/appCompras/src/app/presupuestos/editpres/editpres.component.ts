import { Component, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PresupuestosService } from '../../servicios/presupuestos.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Presupuesto } from 'src/app/modelos/presupuesto.interface';

@Component({
  selector: 'app-editpres',
  templateUrl: './editpres.component.html',
  styleUrls: ['./editpres.component.css']
})
export class EditpresComponent implements AfterViewInit {

  presupuestoForm: any;
  presupuesto!: Presupuesto;
  base: any;
  tipo: any;
  iva: any = 0;
  total: any = 0;
  id: string = "";

  constructor(
    private pf: FormBuilder,
    private presupuestoService: PresupuestosService,
    private router: Router,
    private activatedRouter: ActivatedRoute
  ) {
    this.activatedRouter.params.subscribe(parametros => {
      this.id = parametros['id'];
      this.presupuestoService.getPresupuesto(this.id).subscribe(presupuesto => {
        this.presupuesto = presupuesto as Presupuesto;
        // Asignar valores al formulario después de obtener el presupuesto
        this.setFormValues();
      });
    });

    
  }


  ngOnInit() {
    this.presupuestoForm = this.pf.group({
      proveedor: ['', Validators.required],
      fecha: ['', Validators.required],
      concepto: ['', [Validators.required, Validators.minLength(10)]],
      base: ['', Validators.required],
      tipo: ['', Validators.required],
      iva: [0],
      total: [0]
    });

    this.presupuestoForm.get('iva')?.disable();
    this.presupuestoForm.get('total')?.disable();
    //this.presupuesto = {proveedor:"", fecha: "", concepto:"", base:0, tipo:"", iva:0, total:0, }
    this.onChanges();
  }


  ngAfterViewInit() {
    // Realizar asignaciones de valores aquí después de que Angular haya completado su ciclo de detección de cambios inicial
  }

  onSubmit() {
    this.presupuesto = this.savePresupuesto();
    this.presupuestoService.putPresupuesto(this.presupuesto, this.id).subscribe(newpre => {
      // Hacer algo después de la actualización
    });
    this.presupuestoForm.reset();
    this.router.navigate(['/presupuestos']);
  }

  savePresupuesto() {
    const savePresupuesto = {
      proveedor: this.presupuestoForm.get('proveedor')?.value,
      fecha: this.presupuestoForm.get('fecha')?.value,
      concepto: this.presupuestoForm.get('concepto')?.value,
      base: this.presupuestoForm.get('base')?.value,
      tipo: this.presupuestoForm.get('tipo')?.value,
      iva: this.iva,
      total: this.total
    };
    return savePresupuesto;
  }

  onChanges(): void {
    this.presupuestoForm.valueChanges.subscribe((valor: { base: any; tipo: any }) => {
      this.base = valor.base;
      this.tipo = valor.tipo;
      this.presupuestoForm.value.iva = this.base * this.tipo;
      this.presupuestoForm.value.total = this.base + (this.base * this.tipo);
      this.iva = this.presupuestoForm.value.iva;
      this.total = this.presupuestoForm.value.total;
    });
  }

  // Asignar valores al formulario una vez que se haya obtenido el presupuesto
  private setFormValues() {
    if (this.presupuesto) {
      this.presupuestoForm.patchValue({
        proveedor: this.presupuesto.proveedor,
        fecha: this.presupuesto.fecha,
        concepto: this.presupuesto.concepto,
        base: this.presupuesto.base,
        tipo: this.presupuesto.tipo,
        iva: this.presupuesto.iva,
        total: this.presupuesto.total
      });
    }
  }
}
