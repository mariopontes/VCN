import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { RequestGenericService } from 'src/app/core/services/request-generic.service';
import { environment } from 'src/environments/environment';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

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
      dataNascimento: [new Date(), [Validators.required]],
      documento: ['12345678909', [Validators.required]]
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
