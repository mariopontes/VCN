import { Component, OnInit } from '@angular/core';
import { RequestGenericService } from 'src/app/core/services/request-generic.service';
import { environment } from 'src/environments/environment';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-relatorios',
  templateUrl: './relatorios.component.html',
  styleUrls: ['./relatorios.component.scss']
})
export class RelatoriosComponent implements OnInit {

  form: FormGroup;
  cartao: any;

  constructor(
    private reqGeneric: RequestGenericService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      valor: [100, Validators.required],
      nome: ['Dias', Validators.required],
      sobrenome: ['teste', Validators.required],
      email: ['teste@homg.com', Validators.required],
      dataNascimento: ['2000-01-10', Validators.required],
      telefone: ['33224455', Validators.required],
      celular: ['954768982', Validators.required],
      sexo: ['F', Validators.required],
      nacionalidade: ['Brasileiro', Validators.required],
      documento: ['38463635024', Validators.required],
      nomePai: ['pai', Validators.required],
      nomeMae: ['mae', Validators.required],
      rua: ['Rua padaria', Validators.required],
      orgaoEmissor: ['ssp', Validators.required],
      estadoEmissor: ['SP', Validators.required],
      numero: ['12', Validators.required],
      complemento: ['casa', Validators.required],
      bairro: ['Limão', Validators.required],
      cep: ['02479000', Validators.required],
      cidade: ['São Paulo', Validators.required],
      estado: ['SP', Validators.required],
      pais: ['BR', Validators.required],
      estadoCivil: ['solteiro', Validators.required],
    })
  }

  generateCard() {
    this.reqGeneric.post(`${environment.urlBase}/emitir`, this.form.value).subscribe(
      (res: any) => {
        console.log(res)
        this.cartao = res
      },
      err => console.log(err))
  }
}
