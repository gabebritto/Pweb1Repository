class ClienteEspecial extends Cliente{
    private _dependentes = new Array();

    constructor(nome: string, cpf: string, conta: Conta){
        super(nome, cpf, conta);
    }

    get dependentes(){
        return this._dependentes
    }

    set dependentes(novosDependentes){
        this._dependentes = novosDependentes;
    }

    inserirDependente(cliente: Cliente) {
        this.dependentes.push(cliente);
    }
}