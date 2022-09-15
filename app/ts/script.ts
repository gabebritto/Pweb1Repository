const c1 = new Conta('1', 100);
const c2 = new Conta('2');
const c3 = new Conta('3');

const cb1 = new ContaBonificada('4', 400);
const cb2 = new ContaBonificada('5', 600);
const cb3 = new ContaBonificada('6', 900);

console.log(c1.numero);
const contaController = new ContaController();
contaController.adicionarConta(c1);
contaController.adicionarConta(c2);
// contaController.listar();

const contaBonificada = new ContaBonificada('10', 100);
contaBonificada.creditar(10);
console.log(contaBonificada.getSaldo());

const pessoaRepositorio = new RepositorioPessoas();
const cli1 = new Cliente('Cliente1', '100', 20, '23/05/2000');
const cli2 = new Cliente('Cliente2', '200', 30, '20/07/2032');
const cli3 = new Cliente('Cliente3', '300', 50, '20/03/1200');

cli1.acrescentarConta(c1);
cli2.acrescentarConta(cb2);
cli3.acrescentarConta(c3);

pessoaRepositorio.adicionar(cli1);
pessoaRepositorio.adicionar(cli2);
pessoaRepositorio.adicionar(cli3);

const emp1 = new Empresa('Empresa1', '1001', 10, '05/01/20');
const emp2 = new Empresa('Empresa2', '2001', 10, '1020231');
const emp3 = new Empresa('Empresa3', '10013', 50, '10230103');

emp1.acrescentarConta(c2);
emp2.acrescentarConta(cb1);
emp3.acrescentarConta(cb3);

pessoaRepositorio.adicionar(emp1);
pessoaRepositorio.adicionar(emp2);
pessoaRepositorio.adicionar(emp3);

//MÉTODOS SOLICITADOS:
pessoaRepositorio.remover('1001');

const pessoaPesquisada: Pessoa = pessoaRepositorio.pesquisar('200');
console.log(pessoaPesquisada);
const contaPesquisada: Conta = pessoaPesquisada.pesquisarConta('5');
console.log(contaPesquisada);
pessoaRepositorio.pessoas.forEach(pessoa => {
    console.log('Nome: ' + pessoa.nome + ' Saldo Total: ' + pessoa.saltoTotalContas() + ' Media Saldo: ' + pessoa.mediaSaldoContas());
})

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
