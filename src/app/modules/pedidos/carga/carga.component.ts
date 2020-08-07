import { Component, OnInit, ViewChild } from '@angular/core';
import { RequestGenericService } from 'src/app/core/services/request-generic.service';
import { environment } from 'src/environments/environment';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertService } from 'src/app/shared/services/alert.service';
import Swal from 'sweetalert2/src/sweetalert2.js';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-carga',
  templateUrl: './carga.component.html',
  styleUrls: ['./carga.component.scss']
})
export class CargaComponent implements OnInit {

  @ViewChild('template', { static: false }) template: ModalDirective;

  form: FormGroup;
  btnLoading: boolean;

  constructor(
    private reqGeneric: RequestGenericService,
    private fb: FormBuilder,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      proxy: [null, [Validators.required]],
      valor: [null, [Validators.required, Validators.minLength(1)]]
    })
  }

  addCarga() {
    this.btnLoading = true;
    this.reqGeneric.post(environment.urlBase + '/esppvcn/v1.0.0/cartaovirtual/carga', this.form.value).subscribe(
      (res: any) => {
        console.log(res)
        this.btnLoading = false;
        this.form.reset();
        this.template.config = { ignoreBackdropClick: true };
        this.template.show();
      },
      erro => this.btnLoading = false)
  }
}
