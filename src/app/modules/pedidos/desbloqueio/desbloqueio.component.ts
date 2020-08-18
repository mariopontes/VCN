import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RequestGenericService } from 'src/app/core/services/request-generic.service';

@Component({
  selector: 'app-desbloqueio',
  templateUrl: './desbloqueio.component.html',
  styleUrls: ['./desbloqueio.component.scss']
})
export class DesbloqueioComponent implements OnInit {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private requestGenericService: RequestGenericService
  )
  { }

  ngOnInit() {
    this.form = this.fb.group({
      proxy: [null, [Validators.required, Validators.min(3)]]
    })
  }
  onSubmit(){
    this.requestGenericService.post('https://qa-gw.eprepay.com.br/esppvcn/v1.0.0/cartaovirtual/ativar', this.form.value).subscribe(
    res => console.log(res),
    error => console.log(error)
    )
  }
}
