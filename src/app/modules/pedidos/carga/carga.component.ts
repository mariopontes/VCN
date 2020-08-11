import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { RequestGenericService } from 'src/app/core/services/request-generic.service';
import { environment } from 'src/environments/environment';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-carga',
  templateUrl: './carga.component.html',
  styleUrls: ['./carga.component.scss']
})
export class CargaComponent implements OnInit, OnDestroy {

  @ViewChild('template', { static: false }) template: ModalDirective;

  form: FormGroup;
  btnLoading: boolean;
  esppRef: string;
  currentRequest: Subscription;

  constructor(
    private reqGeneric: RequestGenericService,
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      proxy: [null, [Validators.required]],
      valor: [null, [Validators.required, Validators.minLength(1)]]
    })
  }

  ngOnDestroy() {
    this.currentRequest ? this.currentRequest.unsubscribe() : null;
  }


  addCarga() {
    this.btnLoading = true;
    this.currentRequest = this.reqGeneric.post(environment.urlBase + '/esppvcn/v1.0.0/cartaovirtual/carga', this.form.value).subscribe(
      (res: any) => {
        this.esppRef = res.esppRef;
        this.btnLoading = false;
        this.form.reset();
        this.template.config = { ignoreBackdropClick: true };
        this.template.show();
      },
      erro => this.btnLoading = false)
  }

  cargaFake() {
    this.esppRef = '9353ac20-9c85-4f22-ae47-2610ea20cccd';
    this.template.show();
  }
}
