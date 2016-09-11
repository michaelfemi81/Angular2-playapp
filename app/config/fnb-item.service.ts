import {Injectable} from '@angular/core';
import {Http, URLSearchParams, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class FnbItemService {
    constructor(private http: Http) {}
    
    get(state:any) {
       
        var searchParams = new URLSearchParams();
        searchParams.append('state', state);
         
        return this.http.get('fnbitems', {search: searchParams})
            .map(response => {
              
                return response.json().tileDatas;
            });
    }
    
    add(FnbItem:any) {
        var headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.post('fnbitems', JSON.stringify(FnbItem), { headers: headers })
            .map(response => {});
    }
    
    delete(FnbItem:any) {
        return this.http.delete(`fnbitems/${FnbItem.id}`)
            .map(response => {});
    }
    
   
}