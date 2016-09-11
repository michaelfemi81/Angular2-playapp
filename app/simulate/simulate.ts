import { Component,OnInit,OnDestroy } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { Http, Headers } from '@angular/http';
import { Router ,ActivatedRoute} from '@angular/router';
import {FnbItemService } from '../config/fnb-item.service'
import {Tile} from '../common/tile.component'

@Component({
  selector: 'simulate',
  directives: [ CORE_DIRECTIVES,Tile],
 // providers:[new SocketService("localhost:3000/")],
  templateUrl: 'app/simulate/simulate.html',
  styleUrls: [ 'app/simulate/simulate.css']
})
export class Simulate implements OnInit, OnDestroy{
  hide:any;
  tileDatas:Object[];
  state='';
tilecol:any[];
textcol:any[];
 chart2:any;
 popType:any;
 popClass:any;
 chart1:any;
 fcovered:any;
 ucovered:any;
 fpassed:any;
 upassed:any;
 data:any;
  private sub:any;
    constructor( private route: ActivatedRoute,public router: Router,private fnb:FnbItemService){
this.tilecol=[];
this.textcol=[];
this.chart2={"data":[10,142]};
  this.data={}
  this.data.prog=[];
  //this.data.prog[3]={}
  this.tileDatas=[];
    }
  ngOnInit() {
  this.tileDatas.push(
      {
    "chart1":{"data":[10,142],extra:[Math.round((142/(142+10))*100),78]},
      "chart2":{"data":[2145,4321],extra:[Math.round((4321/(2145+4321))*100),23]},
      "state":"Pending"

         ,id:this.tileDatas.length
     ,type:"firewall",
    arrowType1:{isUp:true,value:64,text:"Test"},
      arrowType2:{isUp:true,value:53,text:"Maintanability"},
        arrowType3:{isRight:true,value:64,text:"Security"},
      arrowType4:{isRight:true,value:53,text:"Workmanship"},
     build: {date:new Date().getTime()},
     timeStarted:(new Date().getTime()),
      itemid:"4325610",
      owner:"Michael Java",
      reason:"Auto-Merged",
       prog:[{color:"grey",value:100},{color:"grey",value:100},{color:"grey",value:100},{color:"grey",value:100}]
    });
  
    
 var createInterval=  setInterval(()=>{
      //this.tileDatas=this.tileDatas||[];
 this.tileDatas.push(
      {
      "chart1":{"data":[10,142],extra:[Math.round((142/(142+10))*100),78]},
      "chart2":{"data":[2145,4321],extra:[Math.round((4321/(2145+4321))*100),23]},
      "state":"Pending"
         ,id:this.tileDatas.length
     ,type:this.getRandom(["firewall","build"]),
    arrowType1:{isUp:true,value:64,text:"Test"},
      arrowType2:{isUp:true,value:53,text:"Maintanability"},
        arrowType3:{isRight:true,value:64,text:"Security"},
      arrowType4:{isRight:true,value:53,text:"Workmanship"},
     build: {date:new Date().getTime()},
     timeStarted:(new Date().getTime()),
      itemid:"Tenrox_R1_1235",
      owner:"",
      reason:"Auto-Merged",
       prog:[{color:"grey",value:100},{color:"grey",value:100},{color:"grey",value:100},{color:"grey",value:100}]
    });
    if(this.tileDatas[this.tileDatas.length-1]["type"]=="firewall"){

      this.tileDatas[this.tileDatas.length-1]["timeStarted"]=new Date().getTime();
       this.tileDatas[this.tileDatas.length-1]["itemid"]="432561"+(this.tileDatas.length-1);
       this.tileDatas[this.tileDatas.length-1]["owner"]=this.getRandom(["Sami","jtuck"]);
    }
    else{
 this.tileDatas[this.tileDatas.length-1]["itemid"]="Tenrox_R1_1235"+(this.tileDatas.length-1);

    }
     this.aa(this.tileDatas.length-1,0,[this.getRandom([100]),this.getRandom([100,25,50]),this.getRandom([0,100,25,0,50,100,100]),this.getRandom([100])]);
},10000)
setTimeout(()=>{

clearInterval(createInterval) 
},100000)
 
   this.aa(0,0,[this.getRandom([100,50]),this.getRandom([100,45,100]),this.getRandom([100,50,45,100]),this.getRandom([100,50,25,100,0,45,100])]);
  
       
       
    }
    getRandom(a:any[]){
var min=0;
var max=a.length-1;
   return a[Math.floor(Math.random() * (max - min + 1)) + min];

    }
    aa(i:any,j:any,endState:Number[]){

  setTimeout(()=>{
this.tileDatas[i]["prog"][j].color="blue";
this.tileDatas[i]["prog"][j].value=0;
var aa=setInterval(()=>{
  if(this.tileDatas[i]["prog"][j].value<endState[j]){
    this.tileDatas[i]["prog"][j].value++;
  }
if(this.tileDatas[i]["prog"][j].value==endState[j]){

if(endState[j]==100){
   clearTimeout(aa);
this.tileDatas[i]["prog"][j].color="green";
}
else if(endState[j]==0){

  if((endState[j-1])<100){
     clearTimeout(aa);
     this.tileDatas[i]["prog"][j].color="grey";
     j=3;
  }
  else{
  endState[j]=100;
  }
}
else{
   clearTimeout(aa);
  this.tileDatas[i]["prog"][j].color="red";
  

 this.tileDatas[i]["prog"][j].value=100;
}



if(j<3){
  
 this.aa(i,j+1,endState);
}
else if(j==3){
  var fail=false;

  for(var a=0;a<4;a++){

    if(this.tileDatas[i]["prog"][a].color=="red"){
      fail=true;
      if(a==0){

      this.tileDatas[i]["arrowType1"]={isDown:true,value:64,text:"Test"};
      
       this.tileDatas[i]["arrowType4"]={"isLeft":true,value:53,text:"Workmanship"};
        this.tileDatas[i]["reason"]="Metrics Reduction"
      }
      else if(a==1){
        this.tileDatas[i]["build"]["failed"]=true;
        this.tileDatas[i]["reason"]="Did not Biuld completely"
      }
      else if(a==2){
        this.tileDatas[i][ "chart1"]={"data":[160,142],extra:[Math.round((142/(142+160))*100),48]};
        this.tileDatas[i]["reason"]="Did not pass unit test"
      }
       else if(a==3){
        this.tileDatas[i][ "chart2"]={"data":[1600,1029],extra:[Math.round((1029/(1029+1600))*100),22]};
        this.tileDatas[i]["reason"]="Did not pass functional test"
      }
     // break;
    }
  }
  if(!fail){
if(this.tileDatas[i]["type"]=="build"){

this.tileDatas[i]["state"]="Complete";
 }
 else{
  this.tileDatas[i]["state"]="Accepted"; 
 }
  }
  else{
    if(this.tileDatas[i]["type"]=="build"){
this.tileDatas[i]["state"]="Failed";
  }
  else{

    this.tileDatas[i]["state"]="Rejected";
  }
  }
 


}

}

},100)

 //console.log(this.tileDatas[i]["state"])
this.tileDatas[i]["state"]="Running";

    },1000)
    }
    ngOnDestroy() {
 // this.sub.unsubscribe();
}
hideAll(e:any){
this.hide=e;

}
pop(e:Event){

this.popType=e["pop"];
this.data=e["data"];

this.chart2=this.data.chart2;
this.chart1=this.data.chart1;

//this.chart1.showLabels=true;
//this.chart2.showLabels=true;
 this.fcovered=23;
      this.fpassed=Math.round((this.chart2.data[1]/(this.chart2.data[0]+this.chart2.data[1]))*100)
   this.ucovered=78;
    this.upassed=Math.round((this.chart1.data[1]/(this.chart1.data[0]+this.chart1.data[1]))*100)
}
   onFnbItemDeleted(fnbItem:any) {
        this.fnb.delete(fnbItem)
            .subscribe(() => {
                this.getMediaItems(this.state);
            });
    }
    
    getMediaItems(state:any) {
        this.state = state;
        this.fnb.get(state)
            .subscribe( tileDatas => {
                this.tileDatas = tileDatas;
               
            });
    }


}