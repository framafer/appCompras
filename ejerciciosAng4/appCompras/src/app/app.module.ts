import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FacturasModule } from 'src/app/facturas/facturas.module';

import { PresupuestosService } from 'src/app/servicios/presupuestos.service';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ProveedoresService } from "src/app/servicios/proveedores.service";
import { AutenticacionService } from './servicios/autenticacion.service';

import { ProveedoresComponent } from './proveedores/proveedores/proveedores.component';
import { InicioComponent } from './inicio/inicio.component';
import { HeaderComponent } from './header/header.component';
import { AddproveeComponent } from './proveedores/addprovee/addprovee.component';
import { FormsModule } from '@angular/forms';
import { AddpresComponent } from './presupuestos/addpres/addpres.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PresupuestosComponent } from './presupuestos/presupuestos/presupuestos.component';
import { EditpresComponent } from './presupuestos/editpres/editpres.component';
import { RegistroComponent } from './autenticacion/registro/registro.component';
import { InisesComponent } from './autenticacion/inises/inises.component';

@NgModule({
  declarations: [
    AppComponent,
    ProveedoresComponent,
    InicioComponent,
    HeaderComponent,
    AddproveeComponent,
    AddpresComponent,
    PresupuestosComponent,
    EditpresComponent,
    RegistroComponent,
    InisesComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FacturasModule
    
  ],
  providers: [ProveedoresService, PresupuestosService, AutenticacionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
