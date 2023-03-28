class PessoaFisica extends Pessoa {
    
    private readonly _cpf: string;

    constructor (nome: string, idade: string, dataNasc: string, cpf: string) {
        super(`${nome} - P. Física`, idade, dataNasc);
        this._cpf = cpf;
    }

    get cpf(): string {
        return this._cpf;
    }

}