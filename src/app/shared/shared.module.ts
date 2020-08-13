import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BtnLoadingComponent } from './components/btn-loading/btn-loading.component';
import { AlertService } from './services/alert.service';
import { CreditCardComponent } from './components/credit-card/credit-card.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { DataTablesModule } from 'angular-datatables';

const maskConfig: Partial<IConfig> = {
  validation: false,
};


@NgModule({
  declarations: [
    BtnLoadingComponent,
    CreditCardComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    BsDatepickerModule.forRoot(),
    ModalModule.forRoot(),
    NgxMaskModule.forRoot(maskConfig)
  ],
  exports: [
    FormsModule,
    BtnLoadingComponent,
    CreditCardComponent,
    BsDatepickerModule,
    ReactiveFormsModule,
    ModalModule,
    NgSelectModule,
    DataTablesModule,
    NgxMaskModule
  ],
  providers: [
    AlertService
  ]
})
export class SharedModule { }
