import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent {

  progreso: number = 50;

  //Retornamos el porcentaje del progreso
  get getPorcentaje() {
    return `${this.progreso}%`
  }

  //Metod para cambiar valor del progreso
  cambiarValor(valor: number) {

    if (this.progreso >= 100 && valor >= 0) {
      return this.progreso = 100;
    }

    if (this.progreso <= 0 && valor < 0) {
      return this.progreso = 0;
    }

    return this.progreso = this.progreso + valor;
  }

}
