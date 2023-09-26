import { Component, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Router, ActivatedRoute } from '@angular/router';
import { FacturasService } from '../servicios/facturas.service';
import { Factura } from '../modelos/factura';
import { ProveedoresService } from 'src/app/servicios/proveedores.service';

@Component({
  selector: 'app-editfactura',
  templateUrl: './editfactura.component.html',
  styleUrls: ['./editfactura.component.css']
})
export class EditfacturaComponent {

  facturaForm: any;
  factura!: Factura;

  proveedores: any[] = [];

  base: any;
  tipo: any;
  iva: any = 0;
  total: any = 0;
  id: string = "";
  cif: string = "";

  constructor(
    private pf: FormBuilder,
    private facturaService: FacturasService,
    private router: Router,
    private activatedRouter: ActivatedRoute,
    private proveedoresService: ProveedoresService
  ) {
    
    this.activatedRouter.params.subscribe(parametros => {
      this.id = parametros['id'];
      this.facturaService.getFactura(this.id).subscribe(factura => {
        this.factura = factura as Factura;
        console.log(factura);
        //this.iva = this.factura.iva;
        //this.total = this.factura.total;
        // Asignar valores al formulario después de obtener la factura
        
        this.setFormValues();
      });
    });

    this.proveedoresService.getProveedores().subscribe(proveedores => {
      for (const id$ in proveedores) {
        if (proveedores.hasOwnProperty(id$)) {
          this.proveedores.push({ ...proveedores[id$], id$ });
        }
      }
    });
    
  }


  ngOnInit() {
    this.facturaForm = this.pf.group({
      proveedor: ['', Validators.required],
      cif: ['', Validators.required],
      fecha: ['', Validators.required],
      concepto: ['', [Validators.required, Validators.minLength(10)]],
      base: ['', Validators.required],
      tipo: ['', Validators.required],
      iva: [0],
      total: [0]
    });

    

    this.facturaForm.get('iva')?.disable();
    this.facturaForm.get('total')?.disable();
    //this.factura = {proveedor:"", fecha: "", concepto:"", base:0, tipo:"", iva:0, total:0, }

    this.base = this.facturaForm.value.base;
    this.tipo = this.facturaForm.value.tipo;
    
    this.onChanges();
  }


  /* ngAfterViewInit() {
    // Realizar asignaciones de valores aquí después de que Angular haya completado su ciclo de detección de cambios inicial
    this.factura.value.iva = this.iva;
    this.factura.value.total = this.total;
  }

  ngOnChanges() {
    // Realizar asignaciones de valores aquí después de que Angular haya completado su ciclo de detección de cambios inicial
    
      this.iva = this.factura.value.base * this.factura.value.tipo;
      this.total = this.factura.value.base + this.iva;
      this.factura.value.iva = this.iva;
      this.factura.value.total = this.total;
  }
 */

  onSubmit() {
    //this.factura = this.savefactura();
    this.actualizafactura();
    this.facturaService.putFactura(this.factura, this.id).subscribe(newfact => {
      // Hacer algo después de la actualización
    });
    this.facturaForm.reset();
    this.router.navigate(['/facturas']);
  }

  saveFactura() {
    const saveFactura = {
      proveedor: this.facturaForm.get('proveedor')?.value,
      cif: this.facturaForm.get('cif')?.value,
      fecha: this.facturaForm.get('fecha')?.value,
      concepto: this.facturaForm.get('concepto')?.value,
      base: this.facturaForm.get('base')?.value,
      tipo: this.facturaForm.get('tipo')?.value,
      iva: this.facturaForm.get('iva').value,
      total: this.facturaForm.get('total').value
    };
    return saveFactura;
  }

  onChanges(): void {
    this.facturaForm.valueChanges.subscribe((valor: { base: any; tipo: any }) => {
      this.base = valor.base;
      this.tipo = valor.tipo;

      this.iva = this.base * this.tipo;
      this.total = this.base + this.iva;

      this.facturaForm.value.base = valor.base;
      this.facturaForm.value.tipo = valor.tipo;
      this.facturaForm.value.iva = this.facturaForm.value.base * this.facturaForm.value.tipo;
      this.facturaForm.value.total = this.facturaForm.value.base + this.facturaForm.value.iva;
      this.actualizafactura();

    });
  }

  // Asignar valores al formulario una vez que se haya obtenido el factura
  private setFormValues() {
    if (this.facturaForm) {
      this.facturaForm.patchValue({
        proveedor: this.factura.proveedor,
        cif: this.factura.cif,
        fecha: this.factura.fecha,
        concepto: this.factura.concepto,
        base: this.factura.base,
        tipo: this.factura.tipo,
        iva: this.factura.iva,
        total: this.factura.total
      });
    }
  }

  actualizafactura(){

    this.factura.proveedor = this.facturaForm.value.proveedor;
    this.factura.cif = this.facturaForm.value.cif;
    this.factura.fecha = this.facturaForm.value.fecha;
    this.factura.concepto = this.facturaForm.value.concepto;
    this.factura.base = this.facturaForm.value.base;
    this.factura.tipo = this.facturaForm.value.tipo;
    this.factura.iva = this.facturaForm.value.iva;
    this.factura.total = this.facturaForm.value.total;
  }

}
