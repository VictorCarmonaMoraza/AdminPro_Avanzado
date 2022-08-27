import { Component, Input, OnInit } from '@angular/core';
import { Color, Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styleUrls: ['./dona.component.css']
})
export class DonaComponent implements OnInit {


  @Input() title:string='Sin titulo';

  ngOnInit(){

  }

  @Input() public doughnutChartLabels:Label[] = ['Prueba1','Prueba2','Prueba3'];
  @Input()public doughnutChartData:MultiDataSet = [
    [350,450,100],
  ];
  //public doughnutChartType:ChartType = 'doughnut';
  public colors :Color[]=[
    {backgroundColor:['#6857E6','#009FEE','#F02059']}
  ]


}
