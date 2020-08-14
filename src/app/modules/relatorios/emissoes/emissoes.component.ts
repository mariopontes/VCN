import { Component, OnInit } from '@angular/core';
import { tableConfig } from 'src/app/shared/utils/table.config';

@Component({
  selector: 'app-emissoes',
  templateUrl: './emissoes.component.html',
  styleUrls: ['./emissoes.component.scss']
})
export class EmissoesComponent implements OnInit {

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
