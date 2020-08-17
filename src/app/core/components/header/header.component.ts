import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/core/services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  empresas = [
    {
      nome: 'Serviços tecnologia da informação S/A',
      cnpj: '02.388.006/0001-03',
      id: '1',
      produtos: [
        {
          nome: 'PP PADRÃO-PPMC Padrão'
        },
        {
          nome: 'PP CONTRATUAL'
        },
      ]
    },
    {
      nome: 'Serviços de transporte de boi S/A ',
      cnpj: '92.121.006/9401-52',
      id: '2',
      produtos: [
        {
          nome: 'RECARGAS ANTECIPADA',
        },
        {
          nome: 'RECARGAS PRÉVIA',
        }
      ]
    },
    {
      nome: 'Serviços de segurança de dados',
      cnpj: '84.311.222/4440-93',
      id: '3',
      produtos: [{
        nome: 'PRODUTO NUMERO 3',
      },
      {
        nome: 'PRODUTO NUMERO 4',
      }
      ]
    }
  ]


  empresaSelecionada: any = '';
  produtoSelecionado: any = '';
  produtos: any;

  constructor(private auth: AuthenticationService) { }

  ngOnInit() {
    this.empresaSelecionada = this.empresas[0];
    this.produtos = this.empresaSelecionada.produtos;
    this.produtoSelecionado = this.empresaSelecionada.produtos[0];
  }

  setEmpresa(empresa: any) {
    this.empresaSelecionada = empresa;
    this.produtos = empresa.produtos;
    this.produtoSelecionado = empresa.produtos[0]
  }

  setProduto(produto: any) {
    this.produtoSelecionado = produto;
  }

  logOut() {
    this.auth.logout();
  }

}
