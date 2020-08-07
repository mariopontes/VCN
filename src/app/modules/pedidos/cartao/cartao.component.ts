import { Component, OnInit, TemplateRef, ViewChild, OnDestroy } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { RequestGenericService } from 'src/app/core/services/request-generic.service';
import { environment } from 'src/environments/environment';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import * as moment from 'moment';
import { AlertService } from 'src/app/shared/services/alert.service';
import { BsModalRef, ModalDirective } from 'ngx-bootstrap/modal';
import { UF } from '../../../shared/utils/estados-brasileiros'

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

  bsConfig: Partial<BsDatepickerConfig> = {
    containerClass: 'theme-dark-blue',
    showWeekNumbers: false,
    dateInputFormat: 'DD/MM/YYYY',
    minDate: new Date('1930-1-1'),
    maxDate: new Date('2002-1-1')
  };
  creditCard: any;

  constructor(
    private reqGeneric: RequestGenericService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    console.log(this.estadosBrasileiros)
    this.createForm();
  }

  ngOnDestroy() {
    this.template.ngOnDestroy();
  }

  createForm() {
    this.form = this.fb.group({
      valor: [10, [Validators.required]],

      nome: ['Roberto', Validators.required],
      email: ['teste@homg.com', [Validators.required, Validators.email]],
      sobrenome: ['Gonçalves', [Validators.required]],
      dataNascimento: [moment().subtract(18, 'years').format('YYYY-MM-DD'), [Validators.required]],
      sexo: ['M', [Validators.required]],
      estadoCivil: ['solteiro', [Validators.required]],
      nacionalidade: ['brasileiro', [Validators.required]],
      nomePai: ['tomas edson', [Validators.required]],
      nomeMae: ['marileuza pereira', [Validators.required]],

      documento: ['61900917092', [Validators.required]],
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

  generateCard() {
    this.btnLoading = true;
    console.log(this.form.value)
    this.reqGeneric.post(`${environment.urlBase}/esppvcn/v1.0.0/cartaovirtual/emitir`, this.form.value).subscribe(
      (res: any) => {
        this.creditCard = res;
        this.cartao = res;
        this.btnLoading = false;
        this.form.reset();
        this.template.config = { ignoreBackdropClick: true };
        this.template.show();
      },
      error => this.btnLoading = false)
  }

}
