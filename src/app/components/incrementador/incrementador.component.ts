import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent implements OnInit {


  @Input() progreso: number = 40;
  @Input() btnClass: string = 'btn-primary';

  @Output() valorSalida: EventEmitter<number> = new EventEmitter<number>();

  ngOnInit() {
    this.btnClass = `btn ${this.btnClass}`
  }

  //Metod para cambiar valor del progreso
  cambiarValor(valor: number) {

    if (this.progreso >= 100 && valor >= 0) {
      this.valorSalida.emit(100);
      return this.progreso = 100;
    }

    if (this.progreso <= 0 && valor < 0) {
      this.valorSalida.emit(0);
      return this.progreso = 0;
    }

    this.progreso = this.progreso + valor;
    return this.valorSalida.emit(this.progreso);
  }

  //Metodo para cuando cambia el valor del input 
  onChange(newValor: number) {

    if (newValor >= 100) {
      this.progreso = 100;
    } else if (newValor <= 0) {
      this.progreso = 0;
    } else {
      this.progreso = newValor;
    }
    //Cuando el valor cambia quiero emitir
    this.valorSalida.emit(this.progreso);
  }
}
