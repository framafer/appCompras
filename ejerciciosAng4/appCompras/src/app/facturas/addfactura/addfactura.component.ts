import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';



import { Router } from '@angular/router';
import { Factura } from '../modelos/factura';
import { FacturasService } from '../servicios/facturas.service';
import { ProveedoresService } from 'src/app/servicios/proveedores.service';

@Component({
  selector: 'app-addfactura',
  templateUrl: './addfactura.component.html',
  styleUrls: ['./addfactura.component.css']
})
export class AddfacturaComponent {
  facturaForm: any;
  factura!: Factura;
  proveedores: any[] = [];
  
  base: any;
  tipo: any;
  iva: number = 0;
  total: number = 0;

  

  constructor(private pf: FormBuilder, 
              private facturaService: FacturasService, 
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
    //this.presupuesto = {proveedor:"", fecha: "", concepto:"", base:0, tipo:"", iva:0, total:0, }
    this.onChanges();
  }



  onSubmit() {
    this.factura = this.saveFactura();
    this.facturaService.postFactura( this.factura )
    .subscribe(newfact => {
      
    });
    this.facturaForm.reset();
    this.router.navigate(['/facturas'])
    }

  saveFactura() {


    const saveFactura = {
      proveedor : this.facturaForm.get('proveedor')?.value,
      cif : this.facturaForm.get('cif')?.value,
      fecha: this.facturaForm.get('fecha')?.value,
      concepto: this.facturaForm.get('concepto')?.value,
      base: this.facturaForm.get('base')?.value,
      tipo: this.facturaForm.get('tipo')?.value,
      
      iva: this.iva,
      total: this.total
      

    };
    return saveFactura;
    

  }

  onChanges(): void {
    this.facturaForm.valueChanges.subscribe((valor: { base: any; tipo: any; }) => { 
      this.base = valor.base; 
      this.tipo = valor.tipo;
      this.facturaForm.value.iva = this.base * this.tipo; 
      this.facturaForm.value.total = this.base + (this.base * this.tipo);
      this.iva = this.facturaForm.value.iva;
      this.total = this.facturaForm.value.total;
    });
  }

}
