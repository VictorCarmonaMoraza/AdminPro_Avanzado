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

    this.getUsuarios().then(usuarios => {
      console.log(usuarios);
    })

    //this.getUsuarios();
    //   const promesa = new Promise((resolve, reject) => {

    //     if (false) {
    //       resolve('Hola Mundo');
    //     } else {
    //       reject('Algo salio mal')
    //     }
    //   });

    //   //Escuchamos cuando la promesa se resuelve cotrrectamente
    //   promesa.then((mensaje) => {
    //     console.log(mensaje);
    //   })
    //   .catch( error =>console.log('Error en mi promesa', error));

    //   console.log('Fin del Init');
  }

  getUsuarios() {

    return new Promise(resolve => {

      fetch('https://reqres.in/api/users')
        .then(resp => resp.json())
        .then(body => resolve(body.data));

    });

  }
}
