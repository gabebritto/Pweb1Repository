class PessoaFisica extends Pessoa{
    private _cpf: string;

    constructor(nome: string, idade: number, dataNascimento: string, cpf: string){
        super(nome + '- Fisíca', idade, dataNascimento);
        this._cpf = cpf;
    }

    get cpf(): string {
        return this._cpf;
    }
}