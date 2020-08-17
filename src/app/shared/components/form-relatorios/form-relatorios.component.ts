import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { BsDatepickerConfig, BsLocaleService } from 'ngx-bootstrap/datepicker';
import { DataPickerConfig } from 'src/app/core/config/data-picker.config';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { RequestGenericService } from 'src/app/core/services/request-generic.service';
import * as moment from 'moment';
import { environment } from 'src/environments/environment';
import { defineLocale, ptBrLocale } from 'ngx-bootstrap/chronos';
defineLocale('pt-br', ptBrLocale);

@Component({
  selector: 'app-form-relatorios',
  templateUrl: './form-relatorios.component.html',
  styleUrls: ['./form-relatorios.component.scss']
})
export class FormRelatoriosComponent implements OnInit {

  @Output() emitData = new EventEmitter;
  @Input() url: string;

  bsConfig: Partial<BsDatepickerConfig> = DataPickerConfig;
  form: FormGroup;
  transacoes: any = {};
  btnLoading: boolean = false;
  currentRequest: Subscription;


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
    this.currentRequest = this.requestGeneric.post(this.url, dateConverted).subscribe(
      res => {
        this.emitData.emit(res);
        this.btnLoading = false;
      },
      err => this.btnLoading = false)
  }

}
