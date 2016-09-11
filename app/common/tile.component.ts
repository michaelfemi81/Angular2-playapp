import { Component,Input,Output,EventEmitter,OnChanges,SimpleChange } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { Http, Headers } from '@angular/http';
import { Router } from '@angular/router';
import {Feature} from './feature.component';
import {Build} from './build.component';
import {Test} from './test.component'
declare var Materialize:any;

@Component({
  selector: 'tile',
  directives: [ CORE_DIRECTIVES,Feature,Build,Test],
 // providers:[new SocketService("localhost:3000/")],
  templateUrl: 'app/common/tile.html',
  styleUrls: [ 'app/common/tile.css'],
  
})

export class Tile implements OnChanges{
    
 @Input('hide') hide:Object;
 @Input('tileData') tileData:Object;
  @Output('hideAll') hideAll = new EventEmitter();
   @Output('popOver') popOver = new EventEmitter();


 
   hidden=true;
 
      pop:any
      time:any
    
    constructor(public router: Router){
  
 
    }
    ngOnInit(){
 
    }
  ngOnChanges(changes: {[propName: string]: SimpleChange}) {
   
  if(changes['hide']["currentValue"]){
var now=changes['hide']["currentValue"]["hide"];
//console.log(now +"--"+this.time)
  if(this.time!=now){
     this.hidden=true;
  }
  }
  
  }

    Hide(){
    if(this.tileData["state"]!="Pending"&&this.tileData["state"]!="Running"){
    this.hidden=!this.hidden;
this.time=new Date().getTime();

    this.hideAll.emit({
        hide:this.time,
        state:this.hidden
    })
    }
    else{
        (Materialize).toast('Cannot View Operation is Still '+this.tileData["state"], 3000)  
    }


  
}
modal(event:Event,type:string,color:any){

event.stopPropagation();

if(color!=='grey'&&color!='blue'){
this.pop=type;
this.popOver.emit({
pop:type,
data:this.tileData
});
    (<any>$('#modal2')).openModal();
}
else{

}
}
//cause of Internationalization problem on safari
getTime(t:string){
    var date=new Date(t);
var hours = date.getHours();
  var minutes = date.getMinutes();
  //console.log(date.getMinutes());
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
var aa = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + aa + ' ' + ampm;

  return strTime;

}
getDate(t:string){
     var date=new Date(t);
     var day=(date.getDate()+"").length<2?"0"+(date.getDate()+""):(date.getDate()+"");
     var month=((date.getMonth()+1)+"").length<2?"0"+((date.getMonth()+1)+""):((date.getMonth()+1)+"");
     var year=date.getFullYear();
     //console.log((year+"").length)
     return month+"/"+day+"/"+(year+"").substr((year+"").length-2);
}
 dismiss(){
(<any>$('#modal2')).closeModal();

 }
but(event:Event){
    event.stopPropagation();
    (Materialize).toast('Operation Done Succesfully ', 3000)  
}
sel(event:Event){
    event.stopPropagation();
   // (Materialize).toast('Operation Done Successfully', 4000)  
}

}