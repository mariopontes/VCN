import { Component, OnInit } from '@angular/core';
import { RequestGenericService } from 'src/app/core/services/request-generic.service';
import { environment } from 'src/environments/environment';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-carga',
  templateUrl: './carga.component.html',
  styleUrls: ['./carga.component.scss']
})
export class CargaComponent implements OnInit {
  form: FormGroup;

  constructor(
    private reqGeneric: RequestGenericService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      proxy: [null, [Validators.required]],
      valor: [null, [Validators.required, Validators.minLength(1)]]
    })
  }

  postCarga() {

    this.reqGeneric.post(environment.urlBase + '/esppvcn/v1.0.0/cartaovirtual/carga', this.form.value).subscribe(
      (res: any) => {
        console.log(res)
      })
  }
}
