import { Component } from '@angular/core';
import { Alumno } from '../modelos/alumno.modelo';

@Component({
  selector: 'app-viewmodelo',
  templateUrl: './viewmodelo.component.html',
  styleUrls: ['./viewmodelo.component.css']
})
export class ViewmodeloComponent {

  alumno1 = new Alumno (1, 'Juan', 'Gutiérrez', 'Madrid');

}
