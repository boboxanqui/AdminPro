import { Component, OnDestroy, OnInit } from '@angular/core';
import { filter, interval, map, Observable, Subscription, take } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnInit, OnDestroy {

  subscription!: Subscription; // permite guardar la subscripción en una variable para cancelarla posteriormente

  constructor( ) { }
  
  ngOnInit(): void {
    this.subscription = this.retornaObservable().pipe( // pipe() es un método rxjs que permite modificar la respuesta con diferentes funciones.
  
    ).subscribe({ // el subscribe puede devolver directamente el valor satisfactorio o crear un objeto con las 3 diferentes respuestas que peude obtener
      
      next: (resp) => console.log(resp), // primero para la respuesta satisfactoria
      error: (err) => console.warn(err), // segundo para error
      complete: () => console.log('Complete') // tercero para cuando se completa
      
    })
  }
  
  ngOnDestroy(): void {
    this.subscription.unsubscribe() // cancelamos el subscribe cuando el componente se destruye
  }

  retornaObservable(): Observable<number> {
    let i = 0;

    // Creación básica de un observable
    // el nombre del observable suele llevar $ para indicar que se trata de un Observable
    // el observer es el encargado de retornar los valores con los distintos métodos que tiene.

    const obs$ = new Observable<number>( observer => {

      const intervale = setInterval( () => {
        observer.next(i) // valor que retorna siempre que sea satisfactorio
        i++

        if( i === 5 ){
          clearInterval( intervale ) // función para finalizar el intervalo
          observer.complete() // valor que retorna para completar el flujo y se finalizan las respuestas. No acepta ningún parametro.
        }

        if ( i > 5 ){
          clearInterval( intervale ) // función para finalizar el intervalo
          observer.error( 'i es mayor de 5' ) // Valor que retorna como error
        }
      }, 1000)
    })

    return obs$
  }

  retornaInterval(): Observable<number> {
    // Operador interval permite emitir resultados cada X tiempo segun el argumento 
    return interval(1000).pipe(
      map( num => num + 1), // map aplica una modificación a todos los resultados obtenidos
      filter( num => num % 2 === 0 ? true : false ), // filter descarta los resultados que devuelva false en su callback
      take(4), // take limita el numero de resultados a obtener
    )
  }

}
