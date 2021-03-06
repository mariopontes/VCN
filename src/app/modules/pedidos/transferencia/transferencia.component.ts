import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { RequestGenericService } from 'src/app/core/services/request-generic.service';
import { AlertService } from 'src/app/core/services/alert.service';
import { environment } from 'src/environments/environment';
import { FormsValidatorsService } from 'src/app/core/services/forms-validators.service';

@Component({
  selector: 'app-transferencia',
  templateUrl: './transferencia.component.html',
  styleUrls: ['./transferencia.component.scss']
})
export class TransferenciaComponent implements OnInit {

  form: FormGroup;
  btnLoading: boolean;
  esppRef: string;
  currentRequest: Subscription;

  constructor(
    public fv: FormsValidatorsService,
    private reqGeneric: RequestGenericService,
    private fb: FormBuilder,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      proxyde: ['1400101860799451', [Validators.required]],
      proxyate: ['1400101766535143', [Validators.required]],
      valor: [10, [Validators.required, Validators.minLength(1)]]
    })
  }

  ngOnDestroy() {
    this.currentRequest ? this.currentRequest.unsubscribe() : null;
  }

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.alertService.notify('warning', 'Preencha corretamente os campos inválidos.')
      return
    }

    this.btnLoading = true;
    this.currentRequest = this.reqGeneric.post(environment.urlBase + '/esppvcn/v1.0.0/cartaovirtual/transferencia/entrecartoes', this.form.value).subscribe(
      (res: any) => {
        this.alertService.notify('success', 'Operação realizada com sucesso!')
        this.btnLoading = false;
        this.form.reset();
      },
      erro => this.btnLoading = false)
  }

}


