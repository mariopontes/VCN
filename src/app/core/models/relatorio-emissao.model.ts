export interface RelatorioEmissao {
    ResponseRelatorioEmissao: Array<ItemRelatorioEmissao>,
}


export interface ItemRelatorioEmissao {
    id: string,
    typeDocumentHolder_Id: string,
    cardHolderRef: string,
    cardSerialNumber: string,
    name: string,
    lastName: string,
    tel1: string,
    tel2: string,
    gender: string,
    birthDate: string,
    email: string,
    document: string,
    number: string,
    complement: string,
    neighborhood: string,
    postCode: string,
    city: string,
    Country: string,
    insertDate: string,
}