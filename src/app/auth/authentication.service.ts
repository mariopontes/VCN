import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  currentUser: any;

  constructor(private http: HttpClient) {
    let token = sessionStorage.getItem('token');
    token ? this.currentUser = JSON.parse(token) : null;
  }

  login(username: string, password: string) {
    let params = new URLSearchParams();
    params.append('grant_type', 'password');
    params.append('password', 'vcn_squad');
    params.append('username', 'vcn_squad');
    params.append('scope', 'openid profile vcn');

    let headers = new HttpHeaders({
      'Content-type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic aTRfVzJlNHZXY25HUVJEZWJZR2VIZlNsemVnYTpMNDUyb011SDR6STQ2M3QzTllURUR4eUY2Y3Nh'
    });

    return this.http.post(environment.login, params.toString(), { headers })
      .pipe(map(user => {
        console.log(user)
        sessionStorage.setItem('token', JSON.stringify(user));
        this.currentUser = user;
        return user;
      }));
  }

  logout() {
    sessionStorage.removeItem('token');
    this.currentUser = null;
  }

  isAuthenticated(): boolean {
    let token = sessionStorage.getItem('token');

    if (token) {
      return true
    }

    return false;
  }

}
