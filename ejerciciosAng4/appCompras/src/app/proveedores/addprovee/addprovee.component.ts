import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';


import { Router } from '@angular/router';
import { Proveedor } from 'src/app/modelos/proveedor.interface';
import { ProveedoresService } from 'src/app/servicios/proveedores.service';


@Component({
  selector: 'app-addprovee',
  templateUrl: './addprovee.component.html',
  styleUrls: ['./addprovee.component.css']
})
export class AddproveeComponent {



  provincias: string[] = [
    'Álava','Albacete','Alicante','Almería','Asturias','Ávila','Badajoz','Barcelona',
    'Burgos', 'Cáceres', 'Cádiz','Cantabria','Castellón','Ciudad Real','Córdoba',
    'La Coruña','Cuenca','Gerona','Granada','Guadalajara',
    'Guipúzcoa','Huelva','Huesca','IslasBaleares','Jaén','León','Lérida','Lugo',
    'Madrid', 'Málaga','Murcia','Navarra','Orense','Palencia','Las Palmas',
    'Pontevedra','La Rioja','Salamanca','Segovia','Sevilla','Soria','Tarragona',
    'Santa Cruz de Tenerife', 'Teruel', 'Toledo', 'Valencia', 'Valladolid', 'Vizcaya',
    'Zamora','Zaragoza' ];

  
  
  proveedorForm: any;
  proveedor!: Proveedor;
   

  constructor(private pf: FormBuilder, private proveedorService: ProveedoresService, private router: Router) {
    
    
  }

  ngOnInit() {
    this.proveedorForm = this.pf.group({
      nombre: ['', Validators.required],
      cif: ['', Validators.required],
      direccion: ['', [Validators.required]],
      cp: ['', Validators.required],
      localidad: ['', Validators.required],
      provincia: ['', Validators.required],
      telefono: ['', Validators.required],
      email: ['', Validators.required],
      contacto: ['', Validators.required]
      
    });

    this.onChanges();
  }



  onSubmit() {
    this.proveedor = this.saveProveedor();
    this.proveedorService.postProveedor( this.proveedor )
    .subscribe(newprov => {
      console.log(newprov);
      
    });
    this.proveedorForm.reset();
    this.router.navigate(['/proveedores'])
    }

  saveProveedor() {


    const saveProveedor = {
      nombre : this.proveedorForm.get('nombre')?.value,
      cif : this.proveedorForm.get('cif')?.value,
      direccion : this.proveedorForm.get('direccion')?.value,
      cp : this.proveedorForm.get('cp')?.value,
      localidad : this.proveedorForm.get('localidad')?.value,
      provincia : this.proveedorForm.get('provincia')?.value,
      telefono : this.proveedorForm.get('telefono')?.value,
      email : this.proveedorForm.get('email')?.value,
      contacto: this.proveedorForm.get('contacto')?.value,
      
    };
    return saveProveedor;
    

  }

  onChanges(): void {
    this.saveProveedor();
  }

}


 

