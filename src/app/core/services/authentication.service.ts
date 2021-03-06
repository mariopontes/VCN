import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  currentUser: any;

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    let token = sessionStorage.getItem('token');

    token ? this.currentUser = JSON.parse(token) : null;
  }

  login(username: string, password: string) {
    let params = new URLSearchParams();
    params.append('grant_type', 'password');
    params.append('password', 'is2b@1234');
    params.append('username', 'is2b');
    params.append('scope', 'openid profile vcn');

    let headers =
      new HttpHeaders({
        'Content-type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic UWlqUWxMOEZmd3pla0xxTVhoQ0daZk9vakh3YTp1SWVYMUdDOW1vV3BTYmtDZktUZnZmSzZoMkFh'
      });

    return this.http.post(environment.urlBase + '/token', params.toString(), { headers })
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
    this.router.navigate(['/login'])
  }

  isAuthenticated(): boolean {
    let token = sessionStorage.getItem('token');

    if (token) {
      return true
    }

    return false;
  }

}
