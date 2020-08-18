import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RequestGenericService } from 'src/app/core/services/request-generic.service';

@Component({
  selector: 'app-black-list',
  templateUrl: './black-list.component.html',
  styleUrls: ['./black-list.component.scss']
})
export class BlackListComponent implements OnInit {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private requestGenericService: RequestGenericService
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      proxy: ['1400101860799451', [Validators.required, Validators.min(3)]]
    })
  }
  onSubmit() {
    this.requestGenericService.post('https://qa-gw.eprepay.com.br/esppvcn/v1.0.0/cartaovirtual/blacklist/remover', this.form.value)
      .subscribe(res => console.log(res),
        error => console.log(error)
      )
  }
}
