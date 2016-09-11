import { Component } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';

//const template = require('./app.com.html');

@Component({
  selector: 'app',
  templateUrl: 'app/app.component.html',
  directives: [ ROUTER_DIRECTIVES ]
})

export class AppComponent {
  constructor(public router: Router) {}
}
