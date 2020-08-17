export interface RelatorioCredito {
    ItemRelatorioCredito: Array<ItemRelatorioCredito>,
}

export interface ItemRelatorioCredito {
    NumeroCartao: string,
    DataEmissao: string,
    NomePortador: string,
    Documento: string,
    ValorCredito: string,
    DataCredito: string,
    NumeroPedido: string,
}