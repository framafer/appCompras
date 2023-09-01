import { Component } from '@angular/core';

@Component({
  selector: 'app-ejeventbinding',
  templateUrl: './ejeventbinding.component.html',
  styleUrls: ['./ejeventbinding.component.css']
})
export class EjeventbindingComponent {

  texto = 'Originalmente el texto se carga así';

  modTexto() {
    this.texto = 'Al pulsar el botón el texto se muestra así';
    }

}
