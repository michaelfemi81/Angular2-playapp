

import {Component,Input} from '@angular/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass} from '@angular/common';

import {CHART_DIRECTIVES} from 'ng2-charts/ng2-charts';


@Component({
  selector: 'test',
   templateUrl: 'app/common/test.html',
  directives: [CHART_DIRECTIVES, NgClass, CORE_DIRECTIVES, FORM_DIRECTIVES],
    styleUrls: [ 'app/common/test.css']
})
export class Test {
   @Input('chartData') chart:any;
  pieChartLabels:string[]
   pieChartData:number[]
     public pieChartType:string
     constructor() {
     this.pieChartLabels=[];
     this.chart={};
 
 //this.pieChartData = this.chart.data
 this.pieChartType= 'pie';

  }
  ngOnInit(){
     if(this.chart.showLabels){
 this.pieChartLabels = ['Passed', 'Failed'];
     }else{
        this.pieChartLabels=[];
     }
  }
  ngOnChanges(){
  if(this.chart.showLabels){
 this.pieChartLabels = ['Passed', 'Failed'];
     }else{
        this.pieChartLabels=[];
     }

  }

ngAfterContentInit(){
 // this.chart=undefined;
}
  
  res=false;
pieChartColors: any[] = [{ backgroundColor: [ "rgba(234,125,59,1)","rgba(114,172,77,0.5)", "#a4c73c", "#a4add3"] ,  borderColor: []}]; 
/** public pieChartColours:Array<any> = [
    { 
      backgroundColor: 'rgba(114,172,77,0.5)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    {
      backgroundColor: 'rgba(190,7,18,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    }
    
  ];**/


  // events
  public chartClicked(e:any):void {
   // console.log(e);
  
  }

  public chartHovered(e:any):void {
   // console.log(e);
  }
}