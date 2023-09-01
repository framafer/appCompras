import { Component } from '@angular/core';

@Component({
  selector: 'app-ejdirectivangif',
  templateUrl: './ejdirectivangif.component.html',
  styleUrls: ['./ejdirectivangif.component.css']
})
export class EjdirectivangifComponent {
  nombre: string | undefined;
  capital: string | undefined;
  resultado: boolean | undefined;

  setResultado(): boolean{
    if (this.capital === "Madrid"){
      this.resultado = true;
      return true;
    } else{
      this.resultado = false;
      return false;
    }
  }

}
