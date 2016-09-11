import { Component,OnInit,OnDestroy } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { Http, Headers } from '@angular/http';
import { Router ,ActivatedRoute} from '@angular/router';
import {FnbItemService } from '../config/fnb-item.service'
import {Tile} from '../common/tile.component'

@Component({
  selector: 'landing',
  directives: [ CORE_DIRECTIVES,Tile],
 // providers:[new SocketService("localhost:3000/")],
  templateUrl: 'app/landing/landing.html',
  styleUrls: [ 'app/landing/landing.css']
})
export class Landing implements OnInit, OnDestroy{
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
    }
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
    if(params["state"]){
      this.state=params["state"]
    }
     this.getMediaItems(this.state);
   });
  
       
       
    }
    ngOnDestroy() {
  this.sub.unsubscribe();
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
    simulate(){

      this.router.navigate(['/simulate']);
    }
    getMediaItems(state:any) {
        this.state = state;
        this.fnb.get(state)
            .subscribe( tileDatas => {
                this.tileDatas = tileDatas;
               
            });
    }


}