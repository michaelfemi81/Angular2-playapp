import { RouterConfig } from '@angular/router';

import { Landing } from './landing/landing';
import { Simulate} from './simulate/simulate';
export const routes: RouterConfig = [
  { path: '',       component:Landing},
  { path: 'simulate',       component:Simulate},
   { path: 'each/:state',       component:Landing},
  { path: '**',     component:Landing},
  
];
