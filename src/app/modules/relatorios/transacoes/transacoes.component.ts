import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BsDatepickerConfig, BsLocaleService } from 'ngx-bootstrap/datepicker';
import { DataPickerConfig } from 'src/app/shared/utils/data-picker.config';
import { Subscription } from 'rxjs';
import { RequestGenericService } from 'src/app/core/services/request-generic.service';
import * as moment from 'moment';
import { environment } from 'src/environments/environment';
import { defineLocale, ptBrLocale } from 'ngx-bootstrap/chronos';
import { tableConfig } from 'src/app/shared/utils/table.config';
defineLocale('pt-br', ptBrLocale);

@Component({
  selector: 'app-transacoes',
  templateUrl: './transacoes.component.html',
  styleUrls: ['./transacoes.component.scss']
})
export class TransacoesComponent implements OnInit {

  bsConfig: Partial<BsDatepickerConfig> = DataPickerConfig;
  form: FormGroup;
  transacoes: any = {};
  btnLoading: boolean = false;
  currentRequest: Subscription;

  dtOptions = tableConfig;

  constructor(
    private localeService: BsLocaleService,
    private requestGeneric: RequestGenericService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.localeService.use('pt-br');
    this.createForm();
  }

  ngOnDestroy() {
    this.currentRequest ? this.currentRequest.unsubscribe() : null;
  }

  createForm() {
    this.form = this.fb.group({
      dataDe: [moment().subtract(1, 'years').format('DD/MM/YYYY'), [Validators.required]],
      dataAte: [moment().format('DD/MM/YYYY'), [Validators.required]],
    })
  }

  onSubmit() {
    const dateConverted = {
      dataDe: moment(this.form.get('dataDe').value, 'DD/MM/YYYY').format('YYYY/MM/DD').replace('/', '').replace('/', ''),
      dataAte: moment(this.form.get('dataAte').value, 'L').format('YYYY/MM/DD').replace('/', '').replace('/', ''),
    }

    this.btnLoading = true;
    this.currentRequest = this.requestGeneric.post(environment.urlBase + '/esppvcn/v1.0.0/cartaovirtual/relatoriotransacao', dateConverted).subscribe(
      res => {
        this.transacoes = res;
        console.log(this.transacoes.mensagem)
        this.btnLoading = false;
      },
      err => this.btnLoading = false)
  }

}
