import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { RequestGenericService } from 'src/app/core/services/request-generic.service';
import { environment } from 'src/environments/environment';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-saldo',
  templateUrl: './saldo.component.html',
  styleUrls: ['./saldo.component.scss']
})
export class SaldoComponent implements OnInit, OnDestroy {

  @ViewChild('template', { static: false }) template: ModalDirective;

  form: FormGroup;
  btnLoading = false;

  saldo: any; // 1400101860799451
  esppRef: any;
  proxy: string;
  currentRequest: Subscription;

  constructor(
    private fb: FormBuilder,
    private requestService: RequestGenericService
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  ngOnDestroy() {
    this.currentRequest ? this.currentRequest.unsubscribe() : null;
  }

  createForm() {
    this.form = this.fb.group({
      proxy: ['1400101860799451', [Validators.required]]
    })
  }

  onSubmit() {
    this.btnLoading = true;

    this.currentRequest = this.requestService.post(environment.urlBase + '/esppvcn/v1.0.0/cartaovirtual/saldo', this.form.value).subscribe(
      (res: any) => {
        this.saldo = res;
        this.btnLoading = false;

        this.template.config = { ignoreBackdropClick: true };
        this.template.show();
      })
  }

}
