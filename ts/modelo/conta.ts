class Conta {

    private _saldo: number;
    private _numero: string;

    constructor(numero: string, saldo: number = 0) {
        this._saldo = saldo;
        this._numero = numero;
    }

    get saldo() {
        return this._saldo;
    }

    get numero() {
        return this._numero;
    }

    debitar(valor: number){
        if (this._saldo >= valor){
            this._saldo -= valor;
        }
    }

    creditar(valor: number){
        this._saldo += valor;
    }

    transferir(destino: Conta, valor: number){
        this.debitar(valor);
        destino.creditar(valor);
    }

}
