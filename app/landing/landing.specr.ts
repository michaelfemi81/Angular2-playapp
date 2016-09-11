/* tslint:disable:no-unused-variable */
import {Landing } from './landing';

import { async, inject } from '@angular/core/testing';
import {FnbItemService } from '../config/fnb-item.service'
import { TestComponentBuilder } from '@angular/core/testing';
import { Router ,ActivatedRoute} from '@angular/router';
import { By }             from '@angular/platform-browser';
import { provide }        from '@angular/core';
import { ViewMetadata }   from '@angular/core';

////////  SPECS  /////////////

describe('Landing Page Test', () => {
    let landing:Landing;
    var router:Router;
    var route:ActivatedRoute;
 var fnb:FnbItemService;
    beforeEach(() => {
        landing = new Landing(route,router,fnb);
    });
 
    it('Should get 5 dogs', () => {
        landing.ngOnInit();
        console.log(landing.tileDatas)
 
       // expect(list.items.length).toBe(5);
      //  expect(list.items).toEqual(['golden retriever', 'french bulldog', 'german shepherd', 'alaskan husky', 'jack russel terrier']);
    });
});
 


