class RepositorioContas {
    contas;
    constructor() {
        this.contas = new Array();
    }
    adicionar(conta) {
        this.contas.push(conta);
    }
    pesquisar(numeroDaConta) {
        return this.contas.find(conta => conta.numero === numeroDaConta);
    }
    getContas() {
        return this.contas;
    }
    remover(numeroDaConta) {
        const contaARemover = this.pesquisar(numeroDaConta);
        if (contaARemover) {
            const indiceARemover = this.contas.indexOf(contaARemover);
            if (indiceARemover > -1) {
                this.contas.splice(indiceARemover, 1);
            }
        }
    }
}
