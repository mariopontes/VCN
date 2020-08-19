import { Component, OnInit, TemplateRef, ViewChild, OnDestroy } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { RequestGenericService } from 'src/app/core/services/request-generic.service';
import { environment } from 'src/environments/environment';
import { BsDatepickerConfig, BsLocaleService } from 'ngx-bootstrap/datepicker';
import { DataPickerConfig } from 'src/app/core/config/data-picker.config';

import * as moment from 'moment';
import { BsModalRef, ModalDirective } from 'ngx-bootstrap/modal';
import { UF } from '../../../shared/utils/json/estados-brasileiros'
import { Subscription } from 'rxjs';
import { defineLocale, ptBrLocale } from 'ngx-bootstrap/chronos';
import { AlertService } from 'src/app/core/services/alert.service';
import { FormsValidatorsService } from 'src/app/core/services/forms-validators.service';
defineLocale('pt-br', ptBrLocale);

@Component({
  selector: 'app-cartao',
  templateUrl: './cartao.component.html',
  styleUrls: ['./cartao.component.scss']
})
export class CartaoComponent implements OnInit, OnDestroy {

  @ViewChild('template', { static: false }) template: ModalDirective;

  form: FormGroup;
  cartao: any;
  btnLoading: boolean;
  modalRef: BsModalRef;
  estadosBrasileiros = UF;
  currentRequest: Subscription;

  bsConfig: Partial<BsDatepickerConfig> = DataPickerConfig;

  creditCard: any;

  constructor(
    public fv: FormsValidatorsService,
    private localeService: BsLocaleService,
    private reqGeneric: RequestGenericService,
    private alertService: AlertService,
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
      valor: ['10', [Validators.required]],

      nome: ['Roberto', Validators.required],
      email: ['teste@homg.com', [Validators.required, Validators.email]],
      sobrenome: ['Gonçalves', [Validators.required]],
      dataNascimento: [moment().subtract(18, 'years').format('DD/MM/YYYY'), [Validators.required]],
      sexo: ['M', [Validators.required]],
      estadoCivil: ['solteiro', [Validators.required]],
      nacionalidade: ['brasileiro', [Validators.required]],
      nomePai: ['tomas edson', [Validators.required]],
      nomeMae: ['marileuza pereira', [Validators.required]],

      documento: ['91549903004', [Validators.required, Validators.pattern(/^([0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}|[0-9]{2}\.?[0-9]{3}\.?[0-9]{3}\/?[0-9]{4}\-?[0-9]{2})$/)]],
      orgaoEmissor: ['SSP'],
      estadoEmissor: ['SP'],

      telefone: ['11 7272 7272', [Validators.required]],
      celular: ['11 97272 7272', [Validators.required]],

      rua: ['Rua dos fuleiros', [Validators.required]],
      numero: ['359', [Validators.required]],
      bairro: ['Acarau', [Validators.required]],
      complemento: ['casa', [Validators.required]],
      cidade: ['São bento', [Validators.required]],
      estado: ['SP', [Validators.required]],
      cep: ['0116542695', [Validators.required]],
      pais: ['BR', [Validators.required]],
    })
  }

  resetForm() {
    this.form.reset();
    this.form.patchValue({
      orgaoEmissor: ['SSP'],
      estadoEmissor: ['SP']
    })
  }

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.alertService.notify('warning', 'Preencha corretamente os campos inválidos.')
      return
    }

    this.form.get('dataNascimento').setValue(moment(this.form.get('dataNascimento').value, 'DD/MM/YYYY').format('YYYY/MM/DD'));
    this.btnLoading = true;
    this.currentRequest = this.reqGeneric.post(`${environment.urlBase}/esppvcn/v1.0.0/cartaovirtual/emitir`, this.form.value).subscribe(
      (res: any) => {
        this.creditCard = res;
        this.cartao = res;
        this.btnLoading = false;
        this.form.reset();
        this.template.config = { ignoreBackdropClick: true };
        this.template.show();
      },
      error => {
        this.form.get('dataNascimento').setValue(moment(this.form.get('dataNascimento').value, 'YYYY/MM/DD').format('DD/MM/YYYY'));
        this.btnLoading = false;
      })
  }

}
