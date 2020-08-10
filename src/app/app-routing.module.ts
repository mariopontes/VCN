import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './core/guards/auth-guard.service';

const routes: Routes = [
  { path: 'login', loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule) },
  { path: 'home', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule), canActivate: [AuthGuardService] },
  { path: 'relatorios', loadChildren: () => import('./modules/relatorios/relatorios.module').then(m => m.RelatoriosModule) },
  { path: 'pedidos', loadChildren: () => import('./modules/pedidos/pedidos.module').then(m => m.PedidosModule) },
  { path: 'consulta', loadChildren: () => import('./modules/consulta/consulta.module').then(m => m.ConsultaModule) },

  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
