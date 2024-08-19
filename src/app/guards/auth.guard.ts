// import { inject } from '@angular/core';
// import { Router } from '@angular/router';

// export const authGuard = () => {
//   const router = inject(Router);
//   const token = localStorage.getItem('token');

//   if (token) {
//     return true;
//   }
//   return router.parseUrl('/login');
// };

import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { LoginService } from '../services/login/login.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private loginService: LoginService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.loginService.isLoggedIn.pipe(
      take(1),
      map((isLoggedIn: boolean) => {
        if (!isLoggedIn) {
          this.loginService.logout();
          this.router.navigate(['/login']);
          return false;
        }
        return true;
      })
    );
  }

  // canActivate(): boolean {
  //   if (this.loginService.isAuthenticated()) {
  //     return true;
  //   } else {
  //     this.router.navigate(['/login']);
  //     return false;
  //   }
  // }
}
