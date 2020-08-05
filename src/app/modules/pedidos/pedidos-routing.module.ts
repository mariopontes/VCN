import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CargaComponent } from './carga/carga.component';
import { CartaoComponent } from './cartao/cartao.component';
import { CartaoecargaComponent } from './cartaoecarga/cartaoecarga.component';
import { ConsultaComponent } from './consulta/consulta.component';

const routes: Routes = [
  { path: 'cartao', component: CartaoComponent },
  { path: 'cartaoecarga', component: CartaoecargaComponent },
  { path: 'carga', component: CargaComponent },
  { path: 'consulta', component: ConsultaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PedidosRoutingModule { }
