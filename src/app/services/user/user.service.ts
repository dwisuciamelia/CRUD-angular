import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { User } from '../../models/user/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public data = {};
  public id = '';
  public visible = false;

  constructor(private http: HttpClient) {}

  getAll(params: any): Observable<any> {
    const dataparams = new HttpParams()
      .set('order', 'email')
      .set('ordertype', 'ASC')
      .set('limit', params?.limit || 10)
      .set('offset', params?.offset || 0);

    return this.http.get<any>(`${environment.apiUrl}users`, {
      params: dataparams,
    });
  }

  getById(userId: string): Observable<User> {
    return this.http.get<User>(`${environment.apiUrl}users/${userId}`);
  }

  create(data: any): Observable<any> {
    let payload = {
      ...data,
    };
    return this.http.post(`${environment.apiUrl}users`, payload);
  }

  update(userId: string, data: any): Observable<any> {
    let payload = {
      ...data,
    };
    return this.http.patch(`${environment.apiUrl}users/${userId}`, payload);
  }

  delete(userId: any): Observable<any> {
    return this.http.delete(`${environment.apiUrl}users/${userId}`);
  }
}
