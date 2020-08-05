import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PedidosRoutingModule } from './pedidos-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CartaoComponent } from './cartao/cartao.component';
import { CartaoecargaComponent } from './cartaoecarga/cartaoecarga.component';
import { CargaComponent } from './carga/carga.component';
import { ConsultaComponent } from './consulta/consulta.component';


@NgModule({
  declarations: [
    CartaoComponent,
    CartaoecargaComponent,
    CargaComponent,
    ConsultaComponent
  ],
  imports: [
    CommonModule,
    PedidosRoutingModule,
    SharedModule
  ]
})
export class PedidosModule { }
