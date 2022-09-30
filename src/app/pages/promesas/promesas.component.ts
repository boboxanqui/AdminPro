import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [
  ]
})
export class PromesasComponent implements OnInit {

  promesa: any

  constructor() { }

  ngOnInit(): void {

    // Declaración de promesa
    this.promesa = new Promise( (resolve, reject) => {
      if( false ){
        resolve('Todo va bien')
      } else {
        reject('Algo va mal')
      }
    })

    this.resolverPromesa()

    // Llamamos y resolvemos la función que retorna una promesa
    this.getUsuarios().then( console.log )
  }

  // Obtener resultado de promesa
  resolverPromesa(){
    this.promesa.then( (resp: any) => {
      console.log( resp );    
    } )
      .catch( (error: any) => console.log( error ))
  }

  // Ejemplo practico de Promesas, con la función FETCH
  getUsuarios() {
    // creamos una promesa que dentro resuelve otra promesa
    const promesa = new Promise( ( resolve ) =>{
      fetch('https://reqres.in/api/users')
        .then( resp => resp.json() )
        .then( body => resolve(body.data) )
    })
    // finalmente retornamos la promesa para poder trabajarla cuando se llame a la función
    return promesa
  }

}
