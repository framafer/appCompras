import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { FacturasComponent } from './facturas/facturas.component';
import { FacturasService } from './servicios/facturas.service';
import { AddfacturaComponent } from './addfactura/addfactura.component';
import { EditfacturaComponent } from './editfactura/editfactura.component';



@NgModule({
  declarations: [
    FacturasComponent,
    AddfacturaComponent,
    EditfacturaComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [FacturasService],
})
export class FacturasModule { }
