import { Component } from '@angular/core';


@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styleUrls: ['./grafica1.component.css']
})
export class Grafica1Component{


  labels1:string[]=['Pan', 'Refresco', 'Tacos'];
  data1= [
    [10,15,40],
  ];
}
