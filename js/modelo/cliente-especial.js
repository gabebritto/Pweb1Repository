class ClienteEspecial extends Cliente {
    constructor(nome, cpf, conta) {
        super(nome, cpf, conta);
        this._dependentes = new Array();
    }
    get dependentes() {
        return this._dependentes;
    }
    set dependentes(novosDependentes) {
        this._dependentes = novosDependentes;
    }
    inserirDependente(cliente) {
        this.dependentes.push(cliente);
    }
}
