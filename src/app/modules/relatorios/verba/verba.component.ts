import { Component, OnInit } from '@angular/core';
import { tableConfig } from 'src/app/shared/utils/table.config';

@Component({
  selector: 'app-verba',
  templateUrl: './verba.component.html',
  styleUrls: ['./verba.component.scss']
})

export class VerbaComponent implements OnInit {

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
