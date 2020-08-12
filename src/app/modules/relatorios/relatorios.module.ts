import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RelatoriosRoutingModule } from './relatorios-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { TransacoesComponent } from './transacoes/transacoes.component';


@NgModule({
  declarations: [TransacoesComponent],
  imports: [
    CommonModule,
    RelatoriosRoutingModule,
    SharedModule
  ]
})
export class RelatoriosModule { }
