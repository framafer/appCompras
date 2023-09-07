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
export class EditpresComponent {

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
      iva: [],
      total: []
    });

    this.presupuestoForm.get('iva')?.disable();
    this.presupuestoForm.get('total')?.disable();
    //this.presupuesto = {proveedor:"", fecha: "", concepto:"", base:0, tipo:"", iva:0, total:0, }
    this.onChanges();
  }


  /* ngAfterViewInit() {
    // Realizar asignaciones de valores aquí después de que Angular haya completado su ciclo de detección de cambios inicial
    this.presupuestoForm.value.iva = this.iva;
    this.presupuestoForm.value.total = this.total;
  }

  ngOnChanges() {
    // Realizar asignaciones de valores aquí después de que Angular haya completado su ciclo de detección de cambios inicial
    
      this.iva = this.presupuestoForm.value.base * this.presupuestoForm.value.tipo;
      this.total = this.presupuestoForm.value.base + this.iva;
      this.presupuestoForm.value.iva = this.iva;
      this.presupuestoForm.value.total = this.total;
  }
 */

  onSubmit() {
    //this.presupuesto = this.savePresupuesto();
    this.actualizaPresupuesto();
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
      iva: this.presupuestoForm.get('iva').value,
      total: this.presupuestoForm.get('total').value
    };
    return savePresupuesto;
  }

  onChanges(): void {
    this.presupuestoForm.valueChanges.subscribe((valor: { base: any; tipo: any }) => {
      this.base = valor.base;
      this.tipo = valor.tipo;

      this.iva = this.base * this.tipo;
      this.total = this.base + this.iva;

      this.presupuestoForm.value.base = this.base;
      this.presupuestoForm.value.tipo = this.tipo;
      this.presupuestoForm.value.iva = this.presupuestoForm.value.base * this.presupuestoForm.value.tipo;
      this.presupuestoForm.value.total = this.presupuestoForm.value.base + this.presupuestoForm.value.iva;
      this.actualizaPresupuesto();

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

  actualizaPresupuesto(){

    this.presupuesto.proveedor = this.presupuestoForm.value.proveedor;
    this.presupuesto.fecha = this.presupuestoForm.value.fecha;
    this.presupuesto.concepto = this.presupuestoForm.value.concepto;
    this.presupuesto.base = this.presupuestoForm.value.base;
    this.presupuesto.tipo = this.presupuestoForm.value.tipo;
    this.presupuesto.iva = this.presupuestoForm.value.iva;
    this.presupuesto.total = this.presupuestoForm.value.total;
  }

}
