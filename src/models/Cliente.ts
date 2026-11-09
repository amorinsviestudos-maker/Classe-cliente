export class Cliente{
     id: number;
    nome: String;
    cpf: string;
    rg: string;

        constructor(id: number,nome: String, cpf: string, rg:string){
        //instancia os atributos
        this.id = id;
        this.nome = nome;
        this.cpf = cpf;
        this.rg = rg;

    }
}