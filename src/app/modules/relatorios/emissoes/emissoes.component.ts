import { Component, OnInit } from '@angular/core';
import { tableConfig } from 'src/app/core/config/table.config';
import { environment } from 'src/environments/environment';
import { RelatorioEmissao } from 'src/app/core/models/relatorio-emissao.model';

@Component({
  selector: 'app-emissoes',
  templateUrl: './emissoes.component.html',
  styleUrls: ['./emissoes.component.scss']
})
export class EmissoesComponent implements OnInit {

  dtOptions = tableConfig;
  showTable: boolean = false;
  data: any;
  urlForm = environment.urlBase + '/esppvcn/v1.0.0/cartaovirtual/relatorioemissao';

  dataMocky: RelatorioEmissao = {
    "ResponseRelatorioEmissao": [
      {
        "id": "61",
        "typeDocumentHolder_Id": "2",
        "cardHolderRef": "45067884002",
        "cardSerialNumber": "2010000205",
        "name": "João Victor",
        "lastName": "Mattosinho Barbosa",
        "tel1": "31121450",
        "tel2": "981232140",
        "gender": "M",
        "birthDate": "2000-10-24T00:00:00+00:00",
        "email": "joao@teste.com",
        "document": "45067884002",
        "number": "68",
        "complement": "apto 98",
        "neighborhood": "Broklin",
        "postCode": "04581050",
        "city": "São Paulo",
        "Country": "BR",
        "insertDate": "2019-10-25T17:35:02.937+00:00"
      },
      {
        "id": "62",
        "typeDocumentHolder_Id": "2",
        "cardHolderRef": "09651153059",
        "cardSerialNumber": "2010000205",
        "name": "Jose",
        "lastName": "Barbosa Filho",
        "tel1": "33221122",
        "tel2": "988776655",
        "gender": "M",
        "birthDate": "2000-10-11T00:00:00+00:00",
        "email": "joao@teste.com",
        "document": "09651153059",
        "number": "66",
        "complement": "apto 99",
        "neighborhood": "Balao",
        "postCode": "04581050",
        "city": "São Paulo",
        "Country": "BR",
        "insertDate": "2020-02-04T16:44:31.97+00:00"
      },
      {
        "id": "63",
        "typeDocumentHolder_Id": "2",
        "cardHolderRef": "38436305850",
        "cardSerialNumber": "2010000205",
        "name": "joici",
        "lastName": "panko",
        "tel1": "33333333",
        "tel2": "985555555",
        "gender": "M",
        "birthDate": "1996-01-01T00:00:00+00:00",
        "email": "joici.panko-consulting@edenredprepagos.com.br",
        "document": "38436305850",
        "number": "123",
        "complement": "apto 321",
        "neighborhood": "Teste",
        "postCode": "04581050",
        "city": "São Paulo",
        "Country": "BR",
        "insertDate": "2020-02-10T10:45:39.713+00:00"
      }
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
