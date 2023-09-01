import { Component } from '@angular/core';

@Component({
  selector: 'app-ejmetodo',
  templateUrl: './ejmetodo.component.html',
  styleUrls: ['./ejmetodo.component.css']
})
export class EjmetodoComponent {

  puntuacion = 9;

  getPuntuacion() {
    return this.puntuacion;
  }

}
