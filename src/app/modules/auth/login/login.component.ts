import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  btnLogin: string = 'login';
  loading: boolean = false;

  constructor(
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
      erro => {
        this.loading = false;
        this.btnLogin = 'login';
      })
  }

}
