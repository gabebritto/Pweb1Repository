class Empresa extends PessoaJuridica{

    constructor(nome: string, cnpj: string, idade: number, dataNascimento: string) {
        super(nome, idade, dataNascimento, cnpj);
    }

}
