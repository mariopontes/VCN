import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultaRoutingModule } from './consulta-routing.module';
import { SaldoComponent } from './saldo/saldo.component';
import { ExtratoComponent } from './extrato/extrato.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [SaldoComponent, ExtratoComponent],
  imports: [
    CommonModule,
    ConsultaRoutingModule,
    SharedModule
  ]
})
export class ConsultaModule { }
