import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { RequestGenericService } from 'src/app/core/services/request-generic.service';
import { environment } from 'src/environments/environment';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import * as moment from 'moment';

@Component({
  selector: 'app-cartao',
  templateUrl: './cartao.component.html',
  styleUrls: ['./cartao.component.scss']
})
export class CartaoComponent implements OnInit {

  form: FormGroup;
  cartao: any;

  bsConfig: Partial<BsDatepickerConfig> = {
    containerClass: 'theme-dark-blue',
    showWeekNumbers: false,
    dateInputFormat: 'DD/MM/YYYY',
    minDate: new Date('1930-1-1'),
    maxDate: new Date('2002-1-1')
  };

  test = ["valor", "nome", "sobrenome", "email", "dataNascimento", "telefone",
    "celular", "sexo", "nacionalidade", "documento", "nomePai", "nomeMae", "rua",
    "orgaoEmissor", "estadoEmissor", "numero", "complemento", "bairro", "cep", "cidade",
    "estado", "pais", "estadoCivil"]

  constructor(
    private reqGeneric: RequestGenericService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.createForm();
    console.log(moment().subtract(18, 'years').format('YYYY-MM-DD'))
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
    this.reqGeneric.post(`${environment.urlBase}/esppvcn/v1.0.0/cartaovirtual/emitir`, this.form.value).subscribe(
      (res: any) => {
        console.log(res)
        this.cartao = res
      })
  }
}
