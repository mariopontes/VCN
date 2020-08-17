import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CargaComponent } from './carga/carga.component';
import { CartaoComponent } from './cartao/cartao.component';
import { TransacoesComponent } from '../relatorios/transacoes/transacoes.component';
import { TransferenciaComponent } from './transferencia/transferencia.component';
import { BloqueioComponent } from './bloqueio/bloqueio.component';

const routes: Routes = [
  { path: 'cartao', component: CartaoComponent },
  { path: 'carga', component: CargaComponent },
  { path: 'transferencia-entre-cartoes', component: TransferenciaComponent },
  { path: 'bloqueio', component: BloqueioComponent },
  { path: '**', redirectTo: 'cartao', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PedidosRoutingModule { }
