import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent {



  constructor() {
    //Creacion de un observable
    const obs$ = new Observable(observer => {
      let i = -1;

      const intervalo = setInterval(() => {
        i++;
        //Next es para emitir
        observer.next(i);
        //Cancelamos el observer cuando i ==4
        if (i == 4) {
          clearInterval(intervalo);
          //Notificar que ya se cancelo
          observer.complete();
        }
        if (i == 2) {
          observer.error('i llego al valor de 2');
        }
        // console.log('tick');
      }, 1000)
    });

    //Nos suscribimos al observable
    obs$.subscribe(
      valor => console.log('Subs:', valor),
      error => console.warn('Error:', error),
      () => console.info('Obs terminado')
    );
  }

}
