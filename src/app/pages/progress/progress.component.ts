import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: [ './progress.component.css' ]
})
export class ProgressComponent  {

  constructor() { }

  progreso1: number = 25;
  progreso2: number = 35;

  get getProgreso1() {
    return `${this.progreso1}%`
  }

  get getProgreso2() {
    return `${this.progreso2}%`
  }

  // en caso de pasar el valor del Output a una función
  cambioValorHijo( valor: number ){
    this.progreso1 = valor
  }

}
