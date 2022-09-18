import { Component, OnDestroy } from '@angular/core';
import { filter, interval, map, Observable, retry, Subscription, take } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnDestroy {

  public intervalSubs: Subscription;

  constructor() {

    this.intervalSubs = this.retornaIntervalo()
      .subscribe(console.log)
  }

  ngOnDestroy(): void {
    this.intervalSubs.unsubscribe();
  }

  retornaIntervalo(): Observable<number> {
    //Este interval es un observable y emitira cada segundo, porque esto son milesimas de segundo
    return interval(500)
      .pipe(
        map(valor => valor + 1),
        filter(valor => (valor % 2 === 0) ? true : false),
        //take(10),
      )
      ;
  }


  //retorna observables
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
