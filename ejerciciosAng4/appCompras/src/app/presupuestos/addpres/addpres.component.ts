import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Presupuesto } from 'src/app/modelos/presupuesto.interface';
import { PresupuestosService } from 'src/app/servicios/presupuestos.service';
import { Router } from '@angular/router';

import { ProveedoresService } from '../../servicios/proveedores.service';

@Component({
  selector: 'app-addpres',
  templateUrl: './addpres.component.html',
  styleUrls: ['./addpres.component.css']
})
export class AddpresComponent {

  presupuestoForm: any;
  presupuesto!: Presupuesto;

  proveedores: any[] = [];
  
  base: any;
  tipo: any;
  iva: number = 0;
  total: number = 0;

  

  constructor(private pf: FormBuilder, 
              private presupuestoService: PresupuestosService, 
              private router: Router, 
              private proveedoresService: ProveedoresService) {
                this.proveedoresService.getProveedores().subscribe(proveedores => {
                  for (const id$ in proveedores) {
                    if (proveedores.hasOwnProperty(id$)) {
                      this.proveedores.push({ ...proveedores[id$], id$ });
                    }
                  }
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



  onSubmit() {
    this.presupuesto = this.savePresupuesto();
    this.presupuestoService.postPresupuesto( this.presupuesto )
    .subscribe(newpres => {
      
    });
    this.presupuestoForm.reset();
    this.router.navigate(['/presupuestos'])
    }

  savePresupuesto() {


    const savePresupuesto = {
      proveedor : this.presupuestoForm.get('proveedor')?.value,
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
    this.presupuestoForm.valueChanges.subscribe((valor: { base: any; tipo: any; }) => { 
      this.base = valor.base; 
      this.tipo = valor.tipo;
      this.presupuestoForm.value.iva = this.base * this.tipo; 
      this.presupuestoForm.value.total = this.base + (this.base * this.tipo);
      this.iva = this.presupuestoForm.value.iva;
      this.total = this.presupuestoForm.value.total;
    });
  }

}
