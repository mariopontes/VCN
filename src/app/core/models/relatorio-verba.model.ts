export interface RelatorioVerba {
    ItemRelatorioVerba: Array<ItemRelatorioVerba>,
    SomaCreditoNoPeriodo: string,
    SomaDebitoNoPeriodo: string,
    SaldoAtual: string,
}


export interface ItemRelatorioVerba {
    Data: string,
    Produto: string,
    Pedido: string,
    Credito: string,
    Debito: string,
    TotalDebitar: string,
    Taxa: string,
    Tarifa: string,
    Saldo: string,
    Origem: string,
    NumeroRps: string,
    SerieRps: string,
    NumeroNF: string,
    Pagamento: string,
    DataPagamento: string,
    GestorVerba: string,
    DataTransacao: string,
    Justificativa: string,
}