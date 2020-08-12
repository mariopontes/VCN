import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { BsDatepickerConfig, BsLocaleService } from 'ngx-bootstrap/datepicker';
import { DataPickerConfig } from 'src/app/shared/utils/data-picker.config';
import { Subscription } from 'rxjs';
import { RequestGenericService } from 'src/app/core/services/request-generic.service';
import * as moment from 'moment';
import { environment } from 'src/environments/environment';
import { defineLocale, ptBrLocale } from 'ngx-bootstrap/chronos';
defineLocale('pt-br', ptBrLocale);

@Component({
  selector: 'app-transacoes',
  templateUrl: './transacoes.component.html',
  styleUrls: ['./transacoes.component.scss']
})
export class TransacoesComponent implements OnInit {

  @ViewChild('template', { static: false }) template: ModalDirective;
  bsConfig: Partial<BsDatepickerConfig> = DataPickerConfig;
  form: FormGroup;
  transacoes: any = {};
  btnLoading: boolean = false;
  currentRequest: Subscription;

  dtOptions: any = { responsive: true };

  constructor(
    private localeService: BsLocaleService,
    private requestGeneric: RequestGenericService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.createForm();
    this.localeService.use('pt-br');
  }

  ngOnDestroy() {
    this.currentRequest ? this.currentRequest.unsubscribe() : null;
  }

  createForm() {
    this.form = this.fb.group({
      dataDe: [moment().subtract(1, 'years').format('L'), [Validators.required]],
      dataAte: [moment().format('L'), [Validators.required]],
    })
  }

  onSubmit() {
    const dateConverted = {
      dataDe: (moment(this.form.get('dataDe').value, 'DD-MM-YYYY').format('YYYY-MM-DD')).replace('-', '').replace('-', ''),
      dataAte: moment(this.form.get('dataAte').value, 'DD-MM-YYYY').format('YYYY-MM-DD').replace('-', '').replace('-', ''),
    }

    this.btnLoading = true;
    this.currentRequest = this.requestGeneric.post(environment.urlBase + '/esppvcn/v1.0.0/cartaovirtual/relatoriotransacao', dateConverted).subscribe(
      res => {
        this.transacoes = res;
        console.log(this.transacoes.mensagem)
        this.template.config = { ignoreBackdropClick: true };
        this.template.show();
        this.btnLoading = false;
      },
      err => this.btnLoading = false)
  }

}
