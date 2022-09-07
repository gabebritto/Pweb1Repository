class ClienteController {
    private _repositorioClientes
    constructor() {
        this._repositorioClientes = new Clientes();
    }

    get repositorioClientes(){
        return this._repositorioClientes;
    }

    adicionarCliente(cliente: Cliente) {
        this._repositorioClientes.inserir(cliente);
    }

    listar() {
        this._repositorioClientes.getClientes().forEach(cliente =>
            this.inserirClienteNoHTML(cliente)
        );
    }

    inserir(evento: Event) {
        evento.preventDefault();
        const elementoNome = <HTMLInputElement>document.querySelector('#nome');
        const elementoCpf = <HTMLInputElement>document.querySelector('#cpf');
        const elementoConta =  <HTMLInputElement>document.querySelector('#conta');
        const idCliente = <HTMLInputElement>document.querySelector('#tipo-de-cliente');
        const contaTeste = new Conta('123',1000);
        const contaTeste2 = new ContaBonificada('5000', 200)
        
        switch (idCliente.value) {
            case '1':
                const cliente = new Cliente(elementoNome.value, elementoCpf.value, contaTeste);
                this._repositorioClientes.inserir(cliente);
                this.inserirClienteNoHTML(cliente);
                break;
            case '2':
                const clienteEspecial = new ClienteEspecial(elementoNome.value, elementoCpf.value, contaTeste2);
                this._repositorioClientes.inserir(clienteEspecial);
                this.inserirClienteNoHTML(clienteEspecial);
                break;
            default:
                alert('Tipo de Cliente Inválido');
        }
    }

    private inserirClienteNoHTML(cliente: Cliente | ClienteEspecial): void {
        const elementoP = document.createElement('p');
        
        if (cliente instanceof ClienteEspecial){
            elementoP.textContent = 'Cliente ' + cliente.cpf + ' | Nome: ' + cliente.nome + ' | Nº da Conta: ' + cliente.conta.numero + ' | Dependentes: ' + cliente.dependentes;
        } else {
            elementoP.textContent = 'Cliente ' + cliente.cpf + ' | Nome: ' + cliente.nome + ' | Nº da Conta: ' + cliente.conta.numero;
        }
        
        const botaoApagar = document.createElement('button');
        botaoApagar.textContent = 'X';

        botaoApagar.addEventListener('click', (event) => {
            this._repositorioClientes.remover(cliente.cpf);
            (<Element>event.target).parentElement.remove();
        });

        elementoP.appendChild(botaoApagar);
        document.body.appendChild(elementoP);
    }
}
