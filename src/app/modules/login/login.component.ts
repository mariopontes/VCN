import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/auth/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private auth: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  login() {
    this.auth.login('', '').subscribe(
      res => this.router.navigate(['/home']),
      erro => console.log('Deu Ruim'))
  }

}
