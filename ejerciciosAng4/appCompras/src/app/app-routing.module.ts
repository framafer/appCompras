import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ProveedoresComponent } from './proveedores/proveedores/proveedores.component';
import { AddproveeComponent } from './proveedores/addprovee/addprovee.component';
import { AddpresComponent } from './presupuestos/addpres/addpres.component';
import { PresupuestosComponent } from './presupuestos/presupuestos/presupuestos.component';
import { EditpresComponent } from './presupuestos/editpres/editpres.component';
import { RegistroComponent } from './autenticacion/registro/registro.component';
import { InisesComponent } from './autenticacion/inises/inises.component';
import { GuardService } from './servicios/guard.service';
import { FacturasComponent } from './facturas/facturas/facturas.component';
import { AddfacturaComponent } from './facturas/addfactura/addfactura.component';
import { EditfacturaComponent } from './facturas/editfactura/editfactura.component';
import { EditproveedorComponent } from './proveedores/editproveedor/editproveedor.component';

const routes: Routes = [
  { path: "", component: InicioComponent,canActivate:[GuardService] },
  
  { path: "proveedores", component: ProveedoresComponent, canActivate:[GuardService] },
  { path: "addprovee", component: AddproveeComponent, canActivate:[GuardService]},
  { path: 'addpres', component: AddpresComponent, canActivate:[GuardService]},
  { path: 'presupuestos', component: PresupuestosComponent, canActivate:[GuardService] },
  { path: 'addfactura', component: AddfacturaComponent, canActivate:[GuardService]},
  { path: 'editfactura/:id', component: EditfacturaComponent, canActivate:[GuardService] },
  { path: 'editproveedor/:id', component: EditproveedorComponent, canActivate:[GuardService] },
  { path: 'editpres/:id', component: EditpresComponent, canActivate:[GuardService] },
  { path: 'facturas', component: FacturasComponent, canActivate:[GuardService] },
  { path: 'registro', component: RegistroComponent },
  { path: 'iniciosesion', component: InisesComponent },
  { path: "**", component: InicioComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
