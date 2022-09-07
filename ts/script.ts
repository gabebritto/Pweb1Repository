function isContaPoupanca(){
    const tipoContaId: HTMLInputElement = <HTMLInputElement>document.querySelector('#tipo-de-conta');
    const formConta = document.querySelector('#form-conta');

    if(tipoContaId.valueAsNumber == 3) 
    {   
        if (!document.querySelector('#div-data-aniversario')){
            const divDataAniversario = document.createElement('div');
            divDataAniversario.setAttribute('id', 'div-data-aniversario');
            divDataAniversario.textContent = 'Data de Aniversário: ';

            const inputDataAniversario = document.createElement('input');
            inputDataAniversario.setAttribute('id','data-aniversario');
            inputDataAniversario.setAttribute('type', 'date');

            divDataAniversario.appendChild(inputDataAniversario);

            return formConta.appendChild(divDataAniversario);
        }
    }else {
        if (document.querySelector('#div-data-aniversario')) {
            formConta.removeChild(document.querySelector('#div-data-aniversario'));
        }
    }
}

const c1 = new Conta('1', 100);
const c2 = new Conta('2');
// const contaBonificada = new ContaBonificada('10', 100);
// const contaController = new ContaController();

// contaBonificada.creditar(10);
// contaController.adicionarConta(c1);
// contaController.adicionarConta(c2);
// contaController.adicionarConta(contaBonificada);
// contaController.listar();

//Clientes
const cl1 = new Cliente('Pedro', '111', c1);
const clienteController = new ClienteController();

clienteController.adicionarCliente(cl1);
clienteController.listar();
let clientePesquisado = clienteController.repositorioClientes.pesquisar('111');
console.log(clientePesquisado);
clienteController.repositorioClientes.remover('111');
console.log(clienteController.repositorioClientes.getClientes());
clienteController.listar()
// const repContas = new RepositorioContas();
//
// const c1 = new Conta('1', 100);
// const c2 = new Conta('2');
//
// repContas.adicionar(c1);
// repContas.adicionar(c2);
//
// repContas.getContas().forEach(conta => console.log(conta.numero))

// console.log(c1.saldo)
// console.log(c2.saldo)
//
// c1.saldo = 200;
//
// c1.debitar(50);
// c2.creditar(1000);
// console.log(c1.saldo)
// console.log(c2.saldo)
//
// c2.transferir(c1, 500);
// console.log(c1.saldo)
// console.log(c2.saldo)