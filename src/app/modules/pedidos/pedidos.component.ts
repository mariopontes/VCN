import { Component, OnInit } from '@angular/core';
import { RequestGenericService } from 'src/app/core/services/request-generic.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.scss']
})
export class PedidosComponent implements OnInit {
  saldo: any; // 1400101860799451
  esppRef: any;
  proxy: string;

  constructor(private reqGeneric: RequestGenericService) { }

  ngOnInit() {
  }


  getSaldo() {
    const obj = {
      "proxy": this.proxy
    }

    this.reqGeneric.post(`${environment.urlBase}/saldo`, obj).subscribe(
      (res: any) => {
        this.saldo = res;
      },
      erro => {
        this.saldo = null;
      })
  }

}
