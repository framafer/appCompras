import { Component, OnInit, Input, Output, EventEmitter } from
'@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent {

  @Input() aviso: string | undefined;
  @Output() mensajeMarcado = new EventEmitter();

  mensaje: string | undefined;

  leido: boolean = false;
  marcar() {
    this.leido = !this.leido;
  }


  detectar(event: any) {
    this.mensaje = this.aviso;
    this.mensajeMarcado.emit(this.mensaje);
    }

}
