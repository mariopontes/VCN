import { Component, OnInit } from '@angular/core';
import { RequestGenericService } from 'src/app/core/services/request-generic.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-saldo',
  templateUrl: './saldo.component.html',
  styleUrls: ['./saldo.component.scss']
})
export class SaldoComponent implements OnInit {

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

    this.requestService.post(environment.urlBase + '/esppvcn/v1.0.0/cartaovirtual/saldo', obj).subscribe(
      (res: any) => {
        this.saldo = res;
      },
      erro => {
        this.saldo = null;
      })
  }
}
