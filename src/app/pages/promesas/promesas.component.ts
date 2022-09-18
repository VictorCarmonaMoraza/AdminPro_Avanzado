import { Component, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styleUrls: ['./promesas.component.css']
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    const promesa = new Promise((resolve, reject) => {

      if (false) {
        resolve('Hola Mundo');
      } else {
        reject('Algo salio mal')
      }
    });

    //Escuchamos cuando la promesa se resuelve cotrrectamente
    promesa.then((mensaje) => {
      console.log(mensaje);
    })
    .catch( error =>console.log('Error en mi promesa', error));

    console.log('Fin del Init');
  }

}
