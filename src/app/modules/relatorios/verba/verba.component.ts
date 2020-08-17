import { Component, OnInit } from '@angular/core';
import { tableConfig } from 'src/app/core/config/table.config';
import { environment } from 'src/environments/environment';
import { RelatorioVerba } from 'src/app/core/models/relatorio-verba.model';

@Component({
  selector: 'app-verba',
  templateUrl: './verba.component.html',
  styleUrls: ['./verba.component.scss']
})

export class VerbaComponent implements OnInit {

  dtOptions = tableConfig;
  showTable: boolean = false;
  data: any;
  urlForm = environment.urlBase + '/esppvcn/v1.0.0/cartaovirtual/relatorioverba';

  dataMocky: RelatorioVerba = {
    "ItemRelatorioVerba": [
      {
        "Data": "20202002 20:12:24",
        "Produto": "Contract at FAST of the product VCN.",
        "Pedido": "243",
        "Credito": "0",
        "Debito": "10.01",
        "TotalDebitar": "10.01",
        "Taxa": "0",
        "Tarifa": "0",
        "Saldo": "-10.01",
        "Origem": "GerarVCN",
        "NumeroRps": "NAO INFORMADO",
        "SerieRps": "NAO INFORMADO",
        "NumeroNF": "NAO INFORMADO",
        "Pagamento": "NAO INFORMADO",
        "DataPagamento": "NAO INFORMADO",
        "GestorVerba": "NAO INFORMADO",
        "DataTransacao": "NAO INFORMADO",
        "Justificativa": "NAO INFORMADO"
      },
      {
        "Data": "20202002 20:18:31",
        "Produto": "Contract at FAST of the product VCN.",
        "Pedido": "244",
        "Credito": "0",
        "Debito": "10.01",
        "TotalDebitar": "10.01",
        "Taxa": "0",
        "Tarifa": "0",
        "Saldo": "-20.02",
        "Origem": "GerarVCN",
        "NumeroRps": "NAO INFORMADO",
        "SerieRps": "NAO INFORMADO",
        "NumeroNF": "NAO INFORMADO",
        "Pagamento": "NAO INFORMADO",
        "DataPagamento": "NAO INFORMADO",
        "GestorVerba": "NAO INFORMADO",
        "DataTransacao": "NAO INFORMADO",
        "Justificativa": "NAO INFORMADO"
      }
    ],
    "SomaCreditoNoPeriodo": "R$0",
    "SomaDebitoNoPeriodo": "R$20.02",
    "SaldoAtual": "R$88735.99"
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
