class Clientes {
    private _clientes;

    constructor() {
        this._clientes = new Array();
    }

    get clientes() {
        return this._clientes;
    }

    inserir(cliente: Cliente) {
        this._clientes.push(cliente);
    }

    pesquisar(cpf: string) {
        return this._clientes.find(cliente => cliente.cpf === cpf);
    }

    getClientes(){
        return this._clientes;
    }

    remover(cpf: string) {
        const contaARemover = this.pesquisar(cpf);
        if (contaARemover) {
            const indiceARemover = this._clientes.indexOf(contaARemover);
            if (indiceARemover > -1) {
                this._clientes.splice(indiceARemover, 1);
            }
        }
    }

    listar(){
        return this._clientes;
    }
}
