class Pessoa{

    protected _nome: string;
    private _idade: string;
    private _dataNasc: string;

    constructor(nome: string, idade: string, dataNasc: string){
        this._nome = nome;
        this._idade = idade;
        this._dataNasc = dataNasc;
    }

    get nome(){
        return this._nome;
    }

    get idade(){
        return this._idade;
    }

    get dataNasc(){
        return this._dataNasc;
    }

    set nome(novoNome){
        this._nome = novoNome;
    }

    set idade(novaIdade){
        this._idade = novaIdade;
    }

    set dataNasc(novaDataNasc){
        this._dataNasc = novaDataNasc;
    }
}