import { Component, OnInit } from '@angular/core';
import { tableConfig } from 'src/app/shared/utils/table.config';
import { environment } from 'src/environments/environment';
import { RelatorioTransacao } from 'src/app/shared/models/relatorio-transacao.model';

@Component({
  selector: 'app-transacoes',
  templateUrl: './transacoes.component.html',
  styleUrls: ['./transacoes.component.scss']
})

export class TransacoesComponent implements OnInit {

  dtOptions = tableConfig;
  showTable: boolean = false;
  data: any;
  urlForm = environment.urlBase + '/esppvcn/v1.0.0/cartaovirtual/relatoriotransacao';

  dataMocky: RelatorioTransacao = {
    "ItemRelatorioTransacao": [
      {
        "DataAutorizacao": "05/02/2019 00:00:00",
        "Cartao": "7624240010008426",
        "NomePortador": "soticia Balsod odranodlaB a",
        "DocumentoPortador": "57204750799",
        "CNPJContratante": "17079937000105",
        "RazaoSocialContratante": "PINBANK BRASIL - PAGAMENTOS INTELIGENTES S.A. ",
        "ValorMoedaLocal": "0.19000",
        "CodMcc": "5734",
        "Mcc": "SOFTWARE DE COMPUTADOR",
        "Rubrica": "NAO INFORMADO",
        "CidadeComercio": "g.co/helppay#",
        "Comercio": "GOOGLE *GARENA           ",
        "GestorDaVerda": "illessa MarraM assenaV"
      },
      {
        "DataAutorizacao": "05/02/2019 00:00:00",
        "Cartao": "7624240010008426",
        "NomePortador": "soticia Balsod odranodlaB a",
        "DocumentoPortador": "57204750799",
        "CNPJContratante": "17079937000105",
        "RazaoSocialContratante": "PINBANK BRASIL - PAGAMENTOS INTELIGENTES S.A. ",
        "ValorMoedaLocal": "0.19000",
        "CodMcc": "5734",
        "Mcc": "SOFTWARE DE COMPUTADOR",
        "Rubrica": "NAO INFORMADO",
        "CidadeComercio": "g.co/helppay#",
        "Comercio": "GOOGLE *GARENA           ",
        "GestorDaVerda": "ANELENA"
      },
      {
        "DataAutorizacao": "05/02/2019 00:00:00",
        "Cartao": "7624240010008426",
        "NomePortador": "soticia Balsod odranodlaB a",
        "DocumentoPortador": "57204750799",
        "CNPJContratante": "17079937000105",
        "RazaoSocialContratante": "PINBANK BRASIL - PAGAMENTOS INTELIGENTES S.A. ",
        "ValorMoedaLocal": "0.19000",
        "CodMcc": "5734",
        "Mcc": "SOFTWARE DE COMPUTADOR",
        "Rubrica": "NAO INFORMADO",
        "CidadeComercio": "g.co/helppay#",
        "Comercio": "GOOGLE *GARENA",
        "GestorDaVerda": "ADNNANDAF"
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
