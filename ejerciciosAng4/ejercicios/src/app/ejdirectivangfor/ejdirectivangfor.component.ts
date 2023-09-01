import { Component } from '@angular/core';

@Component({
  selector: 'app-ejdirectivangfor',
  templateUrl: './ejdirectivangfor.component.html',
  styleUrls: ['./ejdirectivangfor.component.css']
})
export class EjdirectivangforComponent {

  cursos: string[];
  constructor() {
    this.cursos = ['Angular', 'HTML', 'CSS'];
  }
}
