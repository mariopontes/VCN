import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransacoesComponent } from './transacoes/transacoes.component';
import { CreditoComponent } from './credito/credito.component';
import { EmissoesComponent } from './emissoes/emissoes.component';


const routes: Routes = [
  { path: 'transacoes', component: TransacoesComponent },
  { path: 'credito', component: CreditoComponent },
  { path: 'emissoes', component: EmissoesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RelatoriosRoutingModule { }
