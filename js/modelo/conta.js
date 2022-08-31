class Conta {
    constructor(numero, saldo = 0) {
        this._saldo = saldo;
        this._numero = numero;
    }
    get saldo() {
        return this._saldo;
    }
    get numero() {
        return this._numero;
    }
    debitar(valor) {
        if (this._saldo >= valor) {
            this._saldo -= valor;
        }
    }
    creditar(valor) {
        this._saldo += valor;
    }
    transferir(destino, valor) {
        this.debitar(valor);
        destino.creditar(valor);
    }
}
