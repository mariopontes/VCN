import { Component, OnInit } from '@angular/core';
import { tableConfig } from 'src/app/core/config/table.config';
import { environment } from 'src/environments/environment';
import { RelatorioCredito } from 'src/app/core/models/relatorio-credito.model';

@Component({
  selector: 'app-credito',
  templateUrl: './credito.component.html',
  styleUrls: ['./credito.component.scss']
})
export class CreditoComponent implements OnInit {
  dtOptions = tableConfig;
  showTable: boolean = false;
  data: any;
  urlForm = environment.urlBase + '/esppvcn/v1.0.0/cartaovirtual/relatoriocredito';

  dataMocky: RelatorioCredito = {
    "ItemRelatorioCredito": [
      {
        "NumeroCartao": "5344XXXXXXXX6052",
        "DataEmissao": "05/19/2020 16:25:08",
        "NomePortador": "Dias teste",
        "Documento": "79605803089",
        "ValorCredito": "R$ 22.00",
        "DataCredito": "05/19/2020 16:58:35",
        "NumeroPedido": "300"
      },
      {
        "NumeroCartao": "5344XXXXXXXX9866",
        "DataEmissao": "05/22/2020 14:50:09",
        "NomePortador": "Dias teste",
        "Documento": "47451215040",
        "ValorCredito": "R$ 10.00",
        "DataCredito": "05/22/2020 14:50:11",
        "NumeroPedido": "301"
      },
      {
        "NumeroCartao": "5344XXXXXXXX2478",
        "DataEmissao": "05/26/2020 13:56:11",
        "NomePortador": "Dias teste",
        "Documento": "59917499067",
        "ValorCredito": "R$ 10.15",
        "DataCredito": "05/26/2020 13:56:12",
        "NumeroPedido": "302"
      },
      {
        "NumeroCartao": "5344XXXXXXXX8558",
        "DataEmissao": "05/27/2020 14:16:49",
        "NomePortador": "Dias teste",
        "Documento": "79605803089",
        "ValorCredito": "R$ 10.00",
        "DataCredito": "05/27/2020 14:16:49",
        "NumeroPedido": "303"
      },
      {
        "NumeroCartao": "5344XXXXXXXX3999",
        "DataEmissao": "05/29/2020 15:43:43",
        "NomePortador": "Dias",
        "Documento": "30384187000135",
        "ValorCredito": "R$ 10.15",
        "DataCredito": "05/29/2020 15:43:44",
        "NumeroPedido": "304"
      },
      {
        "NumeroCartao": "5344XXXXXXXX4680",
        "DataEmissao": "05/29/2020 17:01:16",
        "NomePortador": "Dias teste",
        "Documento": "47451215040",
        "ValorCredito": "R$ 10.00",
        "DataCredito": "05/29/2020 17:01:16",
        "NumeroPedido": "305"
      },
      {
        "NumeroCartao": "5344XXXXXXXX4680",
        "DataEmissao": "05/29/2020 17:01:16",
        "NomePortador": "Dias teste",
        "Documento": "47451215040",
        "ValorCredito": "R$ 100.00",
        "DataCredito": "05/29/2020 17:03:44",
        "NumeroPedido": "306"
      },
    ]
  }

  constructor() { }

  ngOnInit() {
  }

  getEvent(event: any) {
    this.data = event;
    this.data ? this.showTable = true : false;
    console.log(event.mensagem);
  }
}
