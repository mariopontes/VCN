import { Component, OnInit } from '@angular/core';
import { BsLocaleService, BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { RequestGenericService } from 'src/app/core/services/request-generic.service';
import { DataPickerConfig } from 'src/app/shared/utils/data-picker.config';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { tableConfig } from 'src/app/shared/utils/table.config';
import * as moment from 'moment';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-credito',
  templateUrl: './credito.component.html',
  styleUrls: ['./credito.component.scss']
})
export class CreditoComponent implements OnInit {

  bsConfig: Partial<BsDatepickerConfig> = DataPickerConfig;
  form: FormGroup;
  transacoes: any = {};
  btnLoading: boolean = false;
  showTable: boolean = false;
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
      dataAte: moment(this.form.get('dataAte').value, 'DD/MM/YYYY').format('YYYY/MM/DD').replace('/', '').replace('/', ''),
    }

    this.btnLoading = true;
    this.currentRequest = this.requestGeneric.post(environment.urlBase + '/esppvcn/v1.0.0/cartaovirtual/relatoriocredito', dateConverted).subscribe(
      res => {
        this.showTable = true;
        this.transacoes = res;
        console.log(this.transacoes.mensagem)
        this.btnLoading = false;
      },
      err => this.btnLoading = false)
  }

}
