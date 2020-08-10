import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PedidosRoutingModule } from './pedidos-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CartaoComponent } from './cartao/cartao.component';
import { CargaComponent } from './carga/carga.component';


@NgModule({
  declarations: [
    CartaoComponent,
    CargaComponent,
  ],
  imports: [
    CommonModule,
    PedidosRoutingModule,
    SharedModule
  ]
})
export class PedidosModule { }
