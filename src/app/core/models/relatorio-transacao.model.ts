export interface RelatorioTransacao {
    ItemRelatorioTransacao: Array<ItemRelatorioTransacao>
}

export interface ItemRelatorioTransacao {
    DataAutorizacao: string,
    Cartao: string,
    NomePortador: string,
    DocumentoPortador: string,
    CNPJContratante: string,
    RazaoSocialContratante: string,
    ValorMoedaLocal: string,
    CodMcc: string,
    Mcc: string,
    Rubrica: string,
    CidadeComercio: string,
    Comercio: string,
    GestorDaVerda: string,
}