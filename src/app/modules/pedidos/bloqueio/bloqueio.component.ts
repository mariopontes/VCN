import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RequestGenericService } from 'src/app/core/services/request-generic.service';
import { AlertService } from 'src/app/shared/services/alert.service';

@Component({
  selector: 'app-bloqueio',
  templateUrl: './bloqueio.component.html',
  styleUrls: ['./bloqueio.component.scss']
})
export class BloqueioComponent implements OnInit {

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
    this.requestGenericService.post('https://qa-gw.eprepay.com.br/esppvcn/v1.0.0/cartaovirtual/bloquear', this.form.value).subscribe(
      res => {
        this.loading = false;
        this.alertService.successAlert(`Operação realizada com sucesso!`);
        console.log(res);
      },
      error => {
        this.loading = false;
        console.log(error);
      }
    )
  }
}
