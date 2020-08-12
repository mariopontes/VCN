import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransacoesComponent } from './transacoes/transacoes.component';


const routes: Routes = [
  { path: 'transacoes', component: TransacoesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RelatoriosRoutingModule { }
