import { Component } from '@angular/core';
import { Observable, retry } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent {

  constructor() {

    //Nos suscribimos al observable
    this.retornaObservable().pipe(
      retry(1)
    )
      .subscribe(
        valor => console.log('Subs:', valor),
        error => console.warn('Error:', error),
        () => console.info('Obs terminado')
      );
  }

  retornaObservable(): Observable<number> {
    let i = -1;
    //Creacion de un observable
    const obs$ = new Observable<number>(observer => {

      const intervalo = setInterval(() => {
        i++;
        //Next es para emitir
        observer.next(i);
        //Cancelamos el observer cuando i ==4
        if (i === 4) {
          clearInterval(intervalo);
          //Notificar que ya se cancelo
          observer.complete();
        }
        if (i === 2) {
          i = 0;
          //console.log('i = 2.... error');
          observer.error('i llego al valor de 2');
        }
        // console.log('tick');
      }, 1000)
    });
    return obs$;
  }

}
