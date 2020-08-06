import { Component, OnInit } from '@angular/core';
import { RequestGenericService } from 'src/app/core/services/request-generic.service';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.scss']
})
export class ConsultaComponent implements OnInit {

  saldo: any; // 1400101860799451
  esppRef: any;
  proxy: string;

  constructor(
    private requestService: RequestGenericService
  ) { }

  ngOnInit(): void {
  }

  getSaldo() {
    const obj = {
      "proxy": this.proxy
    }

    this.requestService.post('https://qa-gw.eprepay.com.br/esppvcn/v1.0.0/cartaovirtual/saldo', obj).subscribe(
      (res: any) => {
        this.saldo = res;
      },
      erro => {
        this.saldo = null;
      })
  }
}
