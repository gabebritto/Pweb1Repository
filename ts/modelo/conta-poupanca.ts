class ContaPoupanca extends Conta {
    private _dataAniversario: string;

    constructor(numero: string, saldo: number, dataAniversario: string) {
        super(numero, saldo);
        this._dataAniversario = dataAniversario;
    }

    get dataAniversario() {
        return this._dataAniversario;
    }
}
