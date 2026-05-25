import { Route } from '@angular/router';
import { RegisterComponent } from './register.component';
import { HomeComponent } from './home.component';

export const appRoutes: Route[] = [
  { path: 'register', component: RegisterComponent },
  { path: '', component: HomeComponent },
  { path: '**', redirectTo: '' }
];
