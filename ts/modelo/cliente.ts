class Cliente {

    private _nome: string;
    private _cpf: string;
    private _conta: Conta;

    constructor(nome: string, cpf: string, conta: Conta) {
        this._nome = nome;
        this._cpf = cpf;
        this._conta = conta;
    }

    get nome(){
        return this._nome;
    }

    set nome(novoNome){
        this._nome = novoNome;
    }

    get cpf(){
        return this._cpf;
    }

    set cpf(novoCpf){
        this._cpf = novoCpf;
    }

    get conta(){
        return this._conta;
    }

    set conta(novaConta){
        this._conta = novaConta;
    }
}