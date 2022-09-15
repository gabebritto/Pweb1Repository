class Pessoa{
    protected _nome: string;
    private _idade: number;
    private _dataNascimento: Date;
    private _contas: Array<Conta>;

    constructor(nome: string, idade: number, dataNascimento: string){
        this._nome = nome;
        this._idade = idade;
        this._dataNascimento = new Date(dataNascimento);
        this._contas = new Array<Conta>();
    }

    get contas(): Array<Conta> {
        return this._contas;
    }

    set contas(value: Array<Conta>) {
        this._contas = value;
    }

    get nome(): string{
        return this._nome;
    }

    set nome(novoNome:string){
        this._nome = novoNome;
    }

    get idade(): number {
        return this._idade;
    }

    set idade(novaIdade: number) {
        this._idade = novaIdade;
    }

    get dataNascimento(): Date{
        return this._dataNascimento;
    }

    set dataNascimento(novaDataNascimento: Date) {
        this._dataNascimento = novaDataNascimento;
    }

    saltoTotalContas(): number {
        let valorTotal: number = 0;
        this.contas.forEach(conta => {
            valorTotal += conta.getSaldo();
        })

        return valorTotal;
    }

    mediaSaldoContas(): number {
        let valorTotal: number = this.saltoTotalContas();
        let qntContas = this.contas.length;
        return valorTotal/qntContas;
    }

    acrescentarConta(conta: Conta) {
        this.contas.push(conta);
    }

    removerConta(conta: Conta) {
        let indexConta = this.contas.indexOf(this.pesquisarConta(conta.numero));
        if (indexConta) {
            this.contas.splice(indexConta, 1);
        }
    }

    pesquisarConta(numero: string): Conta {
        return this.contas.find( conta => conta.numero === numero);
    }
}