import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BtnLoadingComponent } from './components/btn-loading/btn-loading.component';
import { AlertService } from './services/alert.service';
import { CreditCardComponent } from './components/credit-card/credit-card.component';



@NgModule({
  declarations: [
    BtnLoadingComponent,
    CreditCardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
    ModalModule.forRoot()
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    BtnLoadingComponent,
    CreditCardComponent,
    BsDatepickerModule,
    ModalModule
  ],
  providers: [
    AlertService
  ]
})
export class SharedModule { }
