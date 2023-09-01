import { Component } from '@angular/core';

@Component({
  selector: 'app-ejdirectivangswitch',
  templateUrl: './ejdirectivangswitch.component.html',
  styleUrls: ['./ejdirectivangswitch.component.css']
})
export class EjdirectivangswitchComponent {

  jugadores: any[] = [
    { nombre: 'Earvin Jhonson', equipo: 'L.A. Lakers'},
    { nombre: 'Acuña', equipo: 'Sevilla F.C.'},
    { nombre: 'Bono', equipo: 'Emiratos Árabes'}
  ]
}
