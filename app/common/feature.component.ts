import { Component ,Input} from '@angular/core';

@Component({
  selector: 'feature',
 
  templateUrl: 'app/common/feature.html',
  styleUrls: [ 'app/common/feature.css']
})
export class Feature{
   @Input('featType') type:any;
  
   
    constructor(){
     
    }
 


 


}