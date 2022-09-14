import { Game } from "./game";

class Computador {
    private _processador: string;
    private _ram: number;
    private _capacidadeHd: number;
    private _indLigado: boolean;
    private _games: Array<Game>;

    constructor(processador: string, ram: number, capacidadeHd: number) {
        this._processador = processador;
        this._ram = ram;
        this._capacidadeHd = capacidadeHd;
        this._indLigado = false;
        this._games = [];
    }

    public get processador() {
        return this._processador;
    }

    public get ram() {
        return this._ram;
    }

    public get capacidadeHd() {
        return this._capacidadeHd;
    }

    public get indLigado() {
        return this._indLigado;
    }

    public get games() {
        return this._games;
    }

    public ligarComputador() {
        if (this.indLigado) {
            return console.log("O computador já está ligado aruá!");
        }

        this._indLigado = true;
    }

    public listarGames() {
        this._games.map((game) => {
            console.log(`O jogo ${game.nome} está instalado.`);
        });
    }

    public resumoComputador() {
        let mensagem = `O processador é: ${this._processador}, possui ${
            this._ram
        } gb de ram, está ${
            this.indLigado ? "ligado" : "desligado"
        } no momento.`;

        mensagem += ` A capacidade do HD é ${this._capacidadeHd} GB. `;

        let totalTamGames = this.calcularTamGames();

        mensagem += `A capacidade disponível é de ${
            this._capacidadeHd - totalTamGames
        }`;

        return mensagem;
    }

    private calcularTamGames(): number {
        return this.games.reduce((prev, cur) => {
            return prev + cur.tamanho;
        }, 0);
    }

    public instalarGame(jogo: Game) {
        if (this._capacidadeHd * (90 / 100) < jogo.tamanho) {
            console.log("Memória insuficiente para instalar o game!");
            return;
        }

        if (jogo.tamanho + this.calcularTamGames() > this._capacidadeHd) {
            console.log("Memoria insuficiente");
            return;
        }

        if (this._ram <= (jogo.minRam ?? 0)) {
            console.log("Memória ram insuficiente! :(");
            return;
        }

        if (!this._indLigado) {
            console.log("O computador necessita estar ligado para continuar!");
            return;
        }

        this._games.push(jogo);
        console.log(`${jogo.nome} adicionado com sucesso!`);
    }
}

export { Computador };
