import { Routes } from '@angular/router';
import { UserComponent } from './views/user/user.component';
import { FormComponent } from './views/form/form.component';
import { LoginComponent } from './views/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginLayoutComponent } from './components/login-layout/login-layout.component';

export const routes: Routes = [
  // { path: '', redirectTo: '/users', pathMatch: 'full' },
  // { path: 'login', component: LoginComponent },
  // { path: 'users', component: UserComponent, canActivate: [AuthGuard] },
  // { path: 'form', component: FormComponent, canActivate: [AuthGuard] },
  {
    path: '',
    component: NavbarComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: 'users',
        pathMatch: 'full',
      },

      {
        path: 'users',
        component: UserComponent,
      },
      {
        path: 'form',
        component: FormComponent,
      },
    ],
  },
  {
    path: '',
    component: LoginLayoutComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
    ],
  },
];
