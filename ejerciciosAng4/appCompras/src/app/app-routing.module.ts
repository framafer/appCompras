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

const routes: Routes = [
  { path: "", component: InicioComponent },
  
  { path: "proveedores", component: ProveedoresComponent },
  // { path: "**", component: InicioComponent},    Cuidado aquí con esta línea que te arruina la navegación. Si se pone tiene que ser al final del todo.
  { path: "addprovee", component: AddproveeComponent},
  { path: 'addpres', component: AddpresComponent},
  { path: 'presupuestos', component: PresupuestosComponent },
  { path: 'editpres/:id', component: EditpresComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'iniciosesion', component: InisesComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
