import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RequestGenericService } from 'src/app/core/services/request-generic.service';
import { environment } from 'src/environments/environment';
import { AlertService } from 'src/app/core/services/alert.service';

@Component({
  selector: 'app-desbloqueio',
  templateUrl: './desbloqueio.component.html',
  styleUrls: ['./desbloqueio.component.scss']
})
export class DesbloqueioComponent implements OnInit {

  form: FormGroup;
  loading = false;

  constructor(
    private fb: FormBuilder,
    private requestGenericService: RequestGenericService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      proxy: ['1400101860799451', [Validators.required, Validators.min(3)]]
    })
  }

  onSubmit() {
    this.loading = true;
    this.requestGenericService.post(`${environment.urlBase}/esppvcn/v1.0.0/cartaovirtual/ativar`, this.form.value).subscribe(
      res => {
        this.loading = false;
        this.alertService.notify('success', 'Operação realizada com sucesso!');
      },
      error => this.loading = false
    )
  }
}
