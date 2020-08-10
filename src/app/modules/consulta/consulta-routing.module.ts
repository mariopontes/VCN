import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SaldoComponent } from './saldo/saldo.component';
import { ExtratoComponent } from './extrato/extrato.component';


const routes: Routes = [
  { path: 'saldo', component: SaldoComponent },
  { path: 'extrato', component: ExtratoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsultaRoutingModule { }
