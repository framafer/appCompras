import { Component } from '@angular/core';

import { Alumno } from 'src/app/modelos/alumno.modelo'

@Component({
  selector: 'app-arrayobjetos',
  templateUrl: './arrayobjetos.component.html',
  styleUrls: ['./arrayobjetos.component.css']
})
export class ArrayobjetosComponent {
  public alumnos: Array<Alumno> = [
    {id: 1 , nombre: 'Juan', apellidos: 'Gutierrez', ciudad: 'Madrid'},
    {id: 2 , nombre: 'Pedro', apellidos: 'Lopez', ciudad: 'Sevilla'}
    ];

}
