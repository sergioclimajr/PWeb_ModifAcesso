class RepositorioContas {

    public contas: Array<Conta>;

    constructor() {
        this.contas = new Array();
    }

    adicionar(conta: Conta) {
        this.contas.push(conta);
    }

    pesquisar(numeroDaConta: string) {
        return this.contas.find(conta => conta.numero === numeroDaConta);
    }

    getContas(){
        return this.contas;
    }

    remover(numeroDaConta: string) {
        const contaARemover = this.pesquisar(numeroDaConta);
        if (contaARemover) {
            const indiceARemover = this.contas.indexOf(contaARemover);
            if (indiceARemover > -1) {
                this.contas.splice(indiceARemover, 1);
            }
        }
    }
}
