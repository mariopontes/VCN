import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RelatoriosRoutingModule } from './relatorios-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { TransacoesComponent } from './transacoes/transacoes.component';
import { CreditoComponent } from './credito/credito.component';
import { EmissoesComponent } from './emissoes/emissoes.component';


@NgModule({
  declarations: [TransacoesComponent, CreditoComponent, EmissoesComponent],
  imports: [
    CommonModule,
    RelatoriosRoutingModule,
    SharedModule
  ]
})
export class RelatoriosModule { }
