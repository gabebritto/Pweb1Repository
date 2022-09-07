class ContaController {
    private _repositorioContas
    constructor() {
        this._repositorioContas = new RepositorioContas();
    }
    get repositorioContas() {
        return this._repositorioContas;
    }

    adicionarConta(conta: Conta) {
        this._repositorioContas.adicionar(conta);
    }

    listar() {
        this._repositorioContas.getContas().forEach(conta =>
            this.inserirContaNoHTML(conta)
        );
    }

    inserir(evento: Event) {
        evento.preventDefault();
        const elementoNumero = <HTMLInputElement>document.querySelector('#numero');
        const elementoSaldo = <HTMLInputElement>document.querySelector('#saldo');
        const elementoDataAniversario =  <HTMLInputElement>document.querySelector('#data-aniversario');
        const idConta = <HTMLInputElement>document.querySelector('#tipo-de-conta');
        
        switch (idConta.value) {
            case '1':
                const conta = new Conta(elementoNumero.value,
                    Number(elementoSaldo.value));
                this._repositorioContas.adicionar(conta);
                this.inserirContaNoHTML(conta);
                break;
            case '2':
                const contaBonificada = new ContaBonificada(elementoNumero.value, Number(elementoSaldo.value));
                this._repositorioContas.adicionar(contaBonificada);
                this.inserirContaNoHTML(contaBonificada);
                break;
            case '3':
                const contaPoupanca = new ContaPoupanca(elementoNumero.value, Number(elementoSaldo.value), elementoDataAniversario.value);
                this.adicionarConta(contaPoupanca);
                this.inserirContaNoHTML(contaPoupanca);
                break;
            default:
                alert('Tipo de conta Inválido');
        }

    }

    private inserirContaNoHTML(conta: Conta | ContaPoupanca): void {
        const elementoP = document.createElement('p');
        
        if (conta instanceof ContaPoupanca){
            elementoP.textContent = 'Conta ' + conta.numero + ' | Saldo: ' + conta.saldo + ' | Data de Aniversário: ' + conta.dataAniversario;
        } else {
            elementoP.textContent = 'Conta ' + conta.numero + ' | Saldo: ' + conta.saldo;
        }
        
        const botaoApagar = document.createElement('button');
        botaoApagar.textContent = 'X';

        botaoApagar.addEventListener('click', (event) => {
            this._repositorioContas.remover(conta.numero);
            (<Element>event.target).parentElement.remove();
        });

        elementoP.appendChild(botaoApagar);
        document.body.appendChild(elementoP);
    }
}
