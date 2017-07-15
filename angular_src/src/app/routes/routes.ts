import {LayoutComponent} from '../layout/layout.component';
import {LoginComponent} from '../components/login/login.component';
import {RegisterComponent} from '../components/register/register.component';
import {ProfileComponent} from '../components/profile/profile.component';
import {AuthGuard} from '../guards/auth.guard';

export const routes = [

  {
    path: '',
    component: LayoutComponent,
    children: [
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'home', loadChildren: './home/home.module#HomeModule'},
      {path:'register', component: RegisterComponent},
      {path:'login', component: LoginComponent},
      {path:'profile', component: ProfileComponent},
      {path: 'cliente', loadChildren: '../cliente/cliente.module#ClienteModule'}
    ]
  },

  // Not found
  {path: '**', redirectTo: 'home'}

];
