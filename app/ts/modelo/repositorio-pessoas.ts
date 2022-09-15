class RepositorioPessoas {
    private _pessoas: Array<Pessoa>;

    constructor(){
        this._pessoas = new Array<Pessoa>();
    }

    get pessoas(): Array<Pessoa>{
        return this._pessoas;
    }

    adicionar(pessoa: Pessoa) {
        this.pessoas.push(pessoa);
    }

    pesquisar(value: string): Pessoa {
        return this.pessoas.find(pessoa => {
            if (pessoa instanceof Cliente) {
                if (pessoa.cpf == value)
                    return pessoa;
            } else if (pessoa instanceof Empresa) {
                if (pessoa.cnpj == value)
                    return pessoa;
            }
        });
    }

    remover(cpfOuCnpj: string) {
        const pessoaARemover = this.pesquisar(cpfOuCnpj);
        if (pessoaARemover) {
            const indiceARemover = this.pessoas.indexOf(pessoaARemover);
            if (indiceARemover > -1) {
                this.pessoas.splice(indiceARemover, 1);
            }
        }
    }

    listar() {
        let text: string = '';
        this.pessoas.forEach(pessoa => {
            if (pessoa instanceof Cliente) {
                text += pessoa.cpf + ' - ' + pessoa.nome + ', ';
            } else if (pessoa instanceof Empresa) {
                text += pessoa.cnpj + ' - ' + pessoa.nome + ', ';
            }
        })

        return text;
    }
}
