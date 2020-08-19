import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { RequestGenericService } from 'src/app/core/services/request-generic.service';
import { environment } from 'src/environments/environment';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AlertService } from 'src/app/core/services/alert.service';
import { FormsValidatorsService } from 'src/app/core/services/forms-validators.service';

@Component({
  selector: 'app-carga',
  templateUrl: './carga.component.html',
  styleUrls: ['./carga.component.scss']
})
export class CargaComponent implements OnInit, OnDestroy {

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
      proxy: ['1400101860799451', [Validators.required]],
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
    this.currentRequest = this.reqGeneric.post(environment.urlBase + '/esppvcn/v1.0.0/cartaovirtual/carga', this.form.value).subscribe(
      (res: any) => {
        this.alertService.notify('success', `Operação realizada com sucesso!`)
        this.btnLoading = false;
        this.form.reset();
      },
      erro => this.btnLoading = false)
  }

}
