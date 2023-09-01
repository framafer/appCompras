import { Component } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent {

  avisos: string[] = ['Aviso 1', 'Aviso 2', 'Aviso 3'];

  texto: string | undefined;

  mostrarMensaje(event:any) {
    this.texto = event + ' marcado como leido';
  }
}
