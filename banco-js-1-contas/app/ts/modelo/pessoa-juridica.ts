class PessoaJuridica extends Pessoa{

    private readonly _cnpj: string;

    constructor (nome: string, idade: string, dataNasc: string, cnpj: string) {
        super(`${nome} - P. Jurírica`, idade, dataNasc);
        this._cnpj = cnpj;
    }

    get cnpj(): string {
        return this._cnpj;
    }

}