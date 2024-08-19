import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );

  get isLoggedIn() {
    const token = localStorage.getItem('token');
    const helper = new JwtHelperService();
    const isExpired = helper.isTokenExpired(token);
    if (token && !isExpired) {
      this.loggedIn.next(true);
    } else {
      this.loggedIn.next(false);
    }
    return this.loggedIn.asObservable();
  }

  constructor(private router: Router, private http: HttpClient) {}

  logIn(data: any): Observable<any> {
    let payload = {
      ...data,
    };
    return this.http.post(`${environment.apiUrl}auth/login`, payload).pipe(
      tap((response: any) => {
        localStorage.setItem('token', response.tokens.access.token);
        localStorage.setItem('currUser', JSON.stringify(response.user));
        this.loggedIn.next(true);
        this.router.navigate(['']);
      })
    );
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('currUser');
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }
}
