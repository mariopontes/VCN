import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/core/services/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  btnLogin: string = 'login';
  loading: boolean = false;

  constructor(
    private alertService: AlertService,
    private auth: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  login() {
    this.loading = true;
    this.btnLogin = 'Aguarde...';

    this.auth.login('', '').subscribe(
      res => this.router.navigate(['/home']),
      error => {
        this.loading = false;
        this.btnLogin = 'login';
        this.alertService.notify('error', 'Não foi possivel se logar no sistema')
      })
  }

}
