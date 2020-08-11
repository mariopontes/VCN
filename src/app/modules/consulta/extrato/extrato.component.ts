import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { RequestGenericService } from 'src/app/core/services/request-generic.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { DataPickerConfig } from 'src/app/shared/utils/data-picker.config';
import * as moment from 'moment';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit, OnDestroy {

  @ViewChild('template', { static: false }) template: ModalDirective;

  bsConfig: Partial<BsDatepickerConfig> = DataPickerConfig;

  form: FormGroup;
  extrato: any = {};
  btnLoading: boolean = false;
  currentRequest: Subscription;

  constructor(
    private requestGeneric: RequestGenericService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.createForm();
  }

  ngOnDestroy() {
    this.currentRequest ? this.currentRequest.unsubscribe() : null;
  }

  createForm() {
    this.form = this.fb.group({
      proxy: ['1400101860799451', [Validators.required]],
      dataDe: [moment().subtract(1, 'years').format('YYYY-MM-DD'), [Validators.required]],
      dataAte: [moment().format('YYYY-MM-DD'), [Validators.required]],
    })
  }

  onSubmit() {
    this.btnLoading = true;
    this.currentRequest = this.requestGeneric.post(environment.urlBase + '/esppvcn/v1.0.0/cartaovirtual/extrato', this.form.value).subscribe(
      res => {
        this.extrato = res;
        this.template.config = { ignoreBackdropClick: true };
        this.template.show();
        this.btnLoading = false;
      })
  }

  setDataFake() {
    this.template.config = { ignoreBackdropClick: true };
    this.template.show();

    this.extrato.extrato = "<G_ServApp_Response><detalhe_transacoes_new></detalhe_transacoes_new><codigo_retorno>00</codigo_retorno></G_ServApp_Response>";
    this.extrato.esppRef = "8a81e4ff-3b62-4ae8-b244-9ccac4218778";
  }


}
