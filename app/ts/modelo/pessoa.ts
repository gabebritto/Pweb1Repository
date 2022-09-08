class Pessoa{
    private _nome: string;
    private _idade: number;
    private _dataNascimento: Date;

    constructor(nome: string, idade: number, dataNascimento: string){
        this._nome = nome;
        this._idade = idade;
        this._dataNascimento = new Date(dataNascimento);
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
}