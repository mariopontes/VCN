import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { RequestGenericService } from 'src/app/core/services/request-generic.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-cartao',
  templateUrl: './cartao.component.html',
  styleUrls: ['./cartao.component.scss']
})
export class CartaoComponent implements OnInit {

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
      nome: ['Dias', Validators.required],
      email: ['teste@homg.com', [Validators.required, Validators.email]],
      dataNascimento: ['2000-01-10', Validators.required],
      documento: ['12345678909', Validators.required]
    })
  }

  generateCard() {
    this.reqGeneric.post(`${environment.urlBase}/emitir`, this.form.value).subscribe(
      (res: any) => {
        console.log(res)
        this.cartao = res
      })
  }
}
