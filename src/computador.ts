/* 1) Crie uma classe chamada Computador

2) A classe deve conter as seguintes PROPRIEDADES
    - processador (string)
    - ram (número)
    - capacidadeHd (numero)
    - indLigado (boolean)
    - games (lista de Game) (opcional)

3) Crie o construtor da classe com os atributos obrigatórios como parâmetro

4) Mantenha os atributos encapsulados

5) A classe deve conter os seguintes MÉTODOS
    - ligarComputador (void), muda o indLigado para true
		- avisar */

    import {Game} from "./game"

        class Computador{
            private _processador: string;
            private _ram: number;
            private _capacidadeHd: number;
            private _indLigado: boolean;
            private _games?: Array <Game>;
        
        constructor (processador: string, ram:number, capacidadeHd:number){
                this._processador = processador;
                this._ram = ram;
                this._capacidadeHd = capacidadeHd;

        }

        

        }

        