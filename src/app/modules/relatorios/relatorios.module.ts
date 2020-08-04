import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RelatoriosRoutingModule } from './relatorios-routing.module';
import { RelatoriosComponent } from './relatorios.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [RelatoriosComponent],
  imports: [
    CommonModule,
    RelatoriosRoutingModule,
    SharedModule
  ]
})
export class RelatoriosModule { }
