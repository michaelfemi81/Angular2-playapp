import {Request, Response, ResponseOptions, RequestMethod} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';


export class MockXHRBackend {
    constructor() {
    }

    createConnection(request: Request) {
        var response = new Observable((responseObserver: Observer<Response>) => {
            var responseData:any;
            var responseOptions:any;
            switch (request.method) {
                case RequestMethod.Get:
                
                    if (request.url.indexOf('fnbitems?state=') >= 0 || request.url === 'fnbitems') {
                        var state:any;
                        if (request.url.indexOf('?') >= 0) {
                            state = request.url.split('=')[1];
                            if (state === 'undefined') state = '';
                        }
                        var fnbItems:any;
                        if (state) {
                            fnbItems = this._fnbItems.filter(fnbItem => fnbItem.state === state);
                            if (fnbItems.length === 0) {
                                responseOptions = new ResponseOptions({
                                    body: JSON.stringify({error: 'state is not valid'}),
                                    status: 404}
                                );
                                responseObserver.error(new Response(responseOptions));
                            }
                        } else {
                            fnbItems = this._fnbItems;
                           
                        }
                        responseOptions = new ResponseOptions({
                            body: { tileDatas: JSON.parse(JSON.stringify(fnbItems)) },
                            status: 200
                        });
                   
                    } else {
                        var id = parseInt(request.url.split('/')[1]);
                        fnbItems = this._fnbItems.filter(fnbItem => fnbItem.id === id);
                        responseOptions = new ResponseOptions({
                            body: JSON.parse(JSON.stringify(fnbItems[0])),
                            status: 200
                        });
                        
                    }
                    break;
                case RequestMethod.Post:
                    var fnbItem = JSON.parse(request.text().toString());
                    fnbItem.id = this._getNewId();
                    this._fnbItems.push(fnbItem);
                    responseOptions = new ResponseOptions({ status: 201 });
                    break;
                case RequestMethod.Delete:
                    var id = parseInt(request.url.split('/')[1]);
                    this._deletefnbItem(id);
                    responseOptions = new ResponseOptions({ status: 200 });
            }
            
            var responseObject = new Response(responseOptions);
            responseObserver.next(responseObject);
            responseObserver.complete();
            return () => { };
        });
        return { response };
    }
    
    _deletefnbItem(id:any) {
        var fnbItem = this._fnbItems.find(fnbItem => fnbItem.id === id);
        var index = this._fnbItems.indexOf(fnbItem);
        if (index >= 0) {
            this._fnbItems.splice(index, 1);
        }
    }
    
    _getNewId() {
        if (this._fnbItems.length > 0) {
            return Math.max.apply(Math, this._fnbItems.map(fnbItem => fnbItem.id)) + 1;
        }
    }

        _fnbItems =[{
"chart1":{"data":[10,142],extra:[Math.round((142/(142+10))*100),78]},
      "chart2":{"data":[2145,4321],extra:[Math.round((4321/(2145+4321))*100),23]},
      "state":"Pending"
      ,id:1
     ,type:"build",
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
    },
    {
  "chart1":{"data":[10,142],extra:[Math.round((142/(142+10))*100),78]},
      "chart2":{"data":[2145,4321],extra:[Math.round((4321/(2145+4321))*100),23]},
 "state":"Running"
    ,id:2
 ,type:"firewall",
  arrowType1:{isUp:true,value:64,text:"Test"},
      arrowType2:{isUp:true,value:53,text:"Maintanability"},
        arrowType3:{isRight:true,value:64,text:"Security"},
      arrowType4:{isRight:true,value:53,text:"Workmanship"},
        build: {date:new Date().getTime()},
           timeStarted:(new Date().getTime()),
      itemid:"432462",
      owner:"jtuck",
      reason:"Auto-Merged",
       prog:[{color:"blue",value:60},{color:"grey",value:100},{color:"grey",value:100},{color:"grey",value:100}]
    },
    {
 "chart1":{"data":[10,142],extra:[Math.round((142/(142+10))*100),78]},
      "chart2":{"data":[2145,4321],extra:[Math.round((4321/(2145+4321))*100),23]},
       "state":"Rejected"
          ,id:3
       ,type:"firewall",
        arrowType1:{isUp:true,value:64,text:"Test"},
      arrowType2:{isDown:true,value:53,text:"Maintanability"},
        arrowType3:{isRight:true,value:64,text:"Security"},
      arrowType4:{isRight:true,value:53,text:"Workmanship"},
        build: {date:new Date().getTime()},
   timeStarted:(new Date().getTime()),
      itemid:"432461",
      owner:"Samy",
      reason:"Metrics Reduction",
       prog:[{color:"red",value:100},{color:"green",value:100},{color:"green",value:100},{color:"green",value:100}]
    },
    {
  "chart1":{"data":[10,142],extra:[Math.round((142/(142+10))*100),78]},
      "chart2":{"data":[2145,4321],extra:[Math.round((4321/(2145+4321))*100),23]},
       "state":"Complete"
          ,id:4
        ,type:"build",
         arrowType1:{isUp:true,value:64,text:"Test"},
      arrowType2:{isUp:true,value:53,text:"Maintanability"},
        arrowType3:{isRight:true,value:64,text:"Security"},
      arrowType4:{isRight:true,value:53,text:"Workmanship"},
        build: {date:new Date().getTime()},
         timeStarted:(new Date().getTime()),
      itemid:"Tenrox_R1_1234",
      owner:"",
      reason:"Auto-Merged",
       prog:[{color:"green",value:100},{color:"green",value:100},{color:"green",value:100},{color:"green",value:100}]
    },
     {
 "chart1":{"data":[10,142],extra:[Math.round((142/(142+10))*100),78]},
      "chart2":{"data":[2145,4321],extra:[Math.round((4321/(2145+4321))*100),23]},
       "state":"Rejected"
          ,id:5
        ,type:"firewall",
         arrowType1:{isUp:true,value:64,text:"Test"},
      arrowType2:{isUp:true,value:53,text:"Maintanability"},
        arrowType3:{isLeft:true,value:63,text:"Security"},
      arrowType4:{isRight:true,value:53,text:"Workmanship"},
  build: {date:new Date().getTime()},
     timeStarted:(new Date().getTime()),
      itemid:"432460",
      owner:"Samy",
      reason:"Metrics Reduction",
       prog:[{color:"red",value:100},{color:"grey",value:100},{color:"grey",value:100},{color:"grey",value:100}]
    },
    
     {
 "chart1":{"data":[10,142],extra:[Math.round((142/(142+10))*100),78]},
      "chart2":{"data":[2145,4321],extra:[Math.round((4321/(2145+4321))*100),23]},
       "state":"Accepted"
          ,id:6
        ,type:"firewall",
         arrowType1:{isUp:true,value:64,text:"Test"},
      arrowType2:{isUp:true,value:53,text:"Maintanability"},
        arrowType3:{isRight:true,value:64,text:"Security"},
      arrowType4:{isRight:true,value:53,text:"Workmanship"},
  build: {date:new Date().getTime()},
     timeStarted:(new Date().getTime()),
      itemid:"432469",
      owner:"Samy",
      reason:"Auto-Merged",
       prog:[{color:"green",value:100},{color:"green",value:100},{color:"green",value:100},{color:"green",value:100}]
    }
    ,
     {
  "chart1":{"data":[10,142],extra:[Math.round((142/(142+10))*100),78]},
      "chart2":{"data":[2145,4321],extra:[Math.round((4321/(2145+4321))*100),23]},
       "state":"Failed"
          ,id:7
        ,type:"build",
         arrowType1:{isUp:true,value:64,text:"Test"},
      arrowType2:{isUp:true,value:53,text:"Maintanability"},
        arrowType3:{isRight:true,value:64,text:"Security"},
      arrowType4:{isRight:true,value:53,text:"Workmanship"},
  build: {date:new Date().getTime(),failed:true},
     timeStarted:(new Date().getTime()),
      itemid:"Tenrox_R1_1239",
      owner:"",
       reason:"Build Incomplete",
       prog:[{color:"green",value:100},{color:"red",value:100},{color:"grey",value:100},{color:"grey",value:100}]
    }
    ,
    {
  "chart1":{"data":[10,142],extra:[Math.round((142/(142+10))*100),78]},
      "chart2":{"data":[2145,4321],extra:[Math.round((4321/(2145+4321))*100),23]},
 "state":"Running"
    ,id:8
 ,type:"build",
  arrowType1:{isUp:true,value:64,text:"Test"},
      arrowType2:{isUp:true,value:53,text:"Maintanability"},
        arrowType3:{isRight:true,value:64,text:"Security"},
      arrowType4:{isRight:true,value:53,text:"Workmanship"},
        build: {date:new Date().getTime()},
           timeStarted:(new Date().getTime()),
      itemid:"Tenrox_R1_1238",
      owner:"",
      reason:"Build Incomplete",
       prog:[{color:"green",value:100},{color:"blue",value:70},{color:"blue",value:90},{color:"grey",value:100}]
    },
    {
"chart1":{"data":[10,142],extra:[Math.round((142/(142+10))*100),78]},
      "chart2":{"data":[2145,4321],extra:[Math.round((4321/(2145+4321))*100),23]},
      "state":"Pending"
         ,id:9
     ,type:"firewall",
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
    },
    ]
}