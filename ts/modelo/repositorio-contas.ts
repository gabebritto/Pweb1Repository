class RepositorioContas {
    private _contas;

    constructor() {
        this._contas = new Array();
    }

    adicionar(conta: Conta) {
        this._contas.push(conta);
    }

    pesquisar(numero: string) {
        return this._contas.find(conta => conta.numero === numero);
    }

    getContas(){
        return this._contas;
    }

    remover(numero: string) {
        const contaARemover = this.pesquisar(numero);
        if (contaARemover) {
            const indiceARemover = this._contas.indexOf(contaARemover);
            if (indiceARemover > -1) {
                this._contas.splice(indiceARemover, 1);
            }
        }
    }
}
