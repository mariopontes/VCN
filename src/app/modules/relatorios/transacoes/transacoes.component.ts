import { Component, OnInit } from '@angular/core';
import { tableConfig } from 'src/app/shared/utils/table.config';

@Component({
  selector: 'app-transacoes',
  templateUrl: './transacoes.component.html',
  styleUrls: ['./transacoes.component.scss']
})

export class TransacoesComponent implements OnInit {

  dtOptions = tableConfig;
  showTable: boolean = false;
  data: any;

  constructor() { }

  ngOnInit() {
  }

  getEvent(event: any) {
    this.data = event;
    this.data ? this.showTable = true : false;
    console.log(event.mensagem);
  }

}
