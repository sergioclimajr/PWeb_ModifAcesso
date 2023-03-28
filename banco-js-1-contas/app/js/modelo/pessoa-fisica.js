class PessoaFisica extends Pessoa {
    _cpf;
    constructor(nome, idade, dataNasc, cpf) {
        super(`${nome} - P. Física`, idade, dataNasc);
        this._cpf = cpf;
    }
    get cpf() {
        return this._cpf;
    }
}
