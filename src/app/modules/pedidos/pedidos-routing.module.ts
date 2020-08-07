import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CargaComponent } from './carga/carga.component';
import { CartaoComponent } from './cartao/cartao.component';
import { ConsultaSaldoComponent } from './consulta-saldo/consulta-saldo.component';

const routes: Routes = [
  { path: 'cartao', component: CartaoComponent },
  { path: 'carga', component: CargaComponent },
  { path: 'consulta-saldo', component: ConsultaSaldoComponent },
  { path: '**', redirectTo: 'consulta', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PedidosRoutingModule { }
