import { Component, OnInit } from '@angular/core';
import{ChartType} from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styleUrls: ['./grafica1.component.css']
})
export class Grafica1Component{

  public doughnutChartLabels:Label[] = ['Sales Q1', 'Sales Q2', 'Sales Q3'];
  public doughnutChartData:MultiDataSet = [
    [350,450,100],
  ];
  //public doughnutChartType:ChartType = 'doughnut';
  public colors :Color[]=[
    {backgroundColor:['#6857E6','#009FEE','#F02059']}
  ]

}
