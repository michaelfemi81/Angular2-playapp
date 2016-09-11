import { bootstrap } from '@angular/platform-browser-dynamic';
import { provideRouter } from '@angular/router';

import {LOOKUP_LISTS, lookupLists} from './config/providers';
import {HTTP_PROVIDERS, XHRBackend} from '@angular/http';
import {provide} from '@angular/core';
import {MockXHRBackend} from './config/mock-xhr-backend';
import {FnbItemService} from './config/fnb-item.service';
//import {SocketService} from './common/socket.io'
import { AppComponent } from './app.component';
import { routes } from './app.routes';
//import { PointsModel } from './map/points.model';


bootstrap(
  AppComponent,
  [
    FnbItemService,
    provideRouter(routes),
 
    HTTP_PROVIDERS,
     provide(XHRBackend, { useClass: MockXHRBackend }),
  
  ]
);
