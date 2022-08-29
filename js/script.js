function isContaPoupanca(){
    const tipoContaId = document.querySelector('#tipo-de-conta').value;
    const formConta = document.querySelector('#form-conta');


    if(tipoContaId == 3) 
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
const contaBonificada = new ContaBonificada('10', 100);
contaBonificada.creditar(10);


const contaController = new ContaController();

contaController.adicionarConta(c1);
contaController.adicionarConta(c2);
contaController.adicionarConta(contaBonificada);
contaController.listar();


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
