import { Component ,Input} from '@angular/core';

@Component({
  selector: 'build',
 
  templateUrl: 'app/common/build.html',
  styleUrls: [ 'app/common/build.css']
})
export class Build{
   @Input('buildInfo') info:any;
  fir:any
  sec:any
  style1:any
  style2:any
   
    constructor(){
       this.fir="app/logo/buildRunning.png";
        this.sec="app/logo/buildRunning.png";
     
    }
    ngOnChanges(){

if(this.info["failed"]){
var aa=this.getRandom(["Running","Failed"])
if(aa=="Failed"){
  this.style1="red";
}
this.fir="app/logo/build"+aa+".png";
this.sec="app/logo/buildFailed.png"
this.style2="red"

}
else{
this.style1="green";
this.style2="green";
   this.fir="app/logo/buildRunning.png";
        this.sec="app/logo/buildRunning.png";
}
     

    }
    ngOnInit(){


if(this.info["failed"]){
var aa=this.getRandom(["Running","Failed"])
if(aa=="Failed"){
  this.style1="red";
}
this.fir="app/logo/build"+aa+".png";
this.sec="app/logo/buildFailed.png"
this.style2="red"

}
else{
this.style1="green";
this.style2="green";
   this.fir="app/logo/buildRunning.png";
        this.sec="app/logo/buildRunning.png";
}
      
      
    }
 
  getRandom(a:any[]){
var min=0;
var max=a.length-1;
   return a[Math.floor(Math.random() * (max - min + 1)) + min];

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
    // console.log((year+"").length)
     return month+"/"+day+"/"+(year+"").substr((year+"").length-2);
}
 


}