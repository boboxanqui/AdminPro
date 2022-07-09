import { Component } from '@angular/core';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {

  constructor() { }


  labels1: string[] = ['Ventas', 'Ganancias', 'Perdidas'];
  data1: number[] = [ 500, 300, 180 ];

  donut1 = {
    labels: ['Papas', 'Chelas', 'Nachos'],
      datasets: [
        { 
          data: [ 5, 2, 20 ],
          backgroundColor: ['#6857E6','#009FEE','#F02059'],
          hoverBackgroundColor: ['#6857E6','#009FEE','#F02059'],
          hoverBorderColor:['#000','#000','#000'],
        },
      ]

  }

}
