class ContaController {
    constructor() {
        this.repositorioContas = new RepositorioContas();
    }

    adicionarConta(conta) {
        this.repositorioContas.adicionar(conta);
    }

    listar() {
        this.repositorioContas.getContas().forEach(conta =>
            this.inserirContaNoHTML(conta)
        );
    }

    inserir(evento) {
        evento.preventDefault();
        const elementoNumero = document.querySelector('#numero');
        const elementoSaldo = document.querySelector('#saldo');
        const elementoDataAniversario =  document.querySelector('#data-aniversario');
        const idConta = document.querySelector('#tipo-de-conta').value;
        
        switch (idConta) {
            case '1':
                const conta = new Conta(elementoNumero.value,
                    Number(elementoSaldo.value));
                this.repositorioContas.adicionar(conta);
                this.inserirContaNoHTML(conta);
                break;
            case '2':
                const contaBonificada = new ContaBonificada(elementoNumero.value, Number(elementoSaldo.value));
                this.repositorioContas.adicionar(contaBonificada);
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

    inserirContaNoHTML(conta) {
        const elementoP = document.createElement('p');
        
        if (conta.dataAniversario != null){
            elementoP.textContent = 'Conta ' + conta.numero + ' | Saldo: ' + conta.saldo + ' | Data de Aniversário: ' + conta.dataAniversario;
        } else {
            elementoP.textContent = 'Conta ' + conta.numero + ' | Saldo: ' + conta.saldo;
        }
        
        const botaoApagar = document.createElement('button');
        botaoApagar.textContent = 'X';

        botaoApagar.addEventListener('click', (event) => {
            this.repositorioContas.remover(conta.numero);
            event.target.parentElement.remove();
        });

        elementoP.appendChild(botaoApagar);
        document.body.appendChild(elementoP);
    }
}
