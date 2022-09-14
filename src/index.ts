// Crie uma classe chamada Game - abstração de jogos virtuais
// 	- nome (string)
// 	- tamanho (numero)
// 	- genero (string, "R" = rpg, "C"= corrida, "F" = fps, "O" = outro)
// 	- minRam (numero) (opcional)

import { Computador } from "./computador";
import { Game } from "./game";

// 2) Crie o construtor da classe com os atributos obrigatórios como parâmetro

// 3) Mantenha os atributos encapsulados


let teste = new Computador('blabla', 1000, 1000);


let games = new Game('CS:GO', 100, 'seila');
let games2 = new Game('DIABLO III', 101, 'seila2');


teste._games = [games, games2];

console.log(teste.listarGames());

console.log(teste.resumoComputador());
console.log(teste.ligarComputador());
console.log(teste.resumoComputador());
console.log(teste.ligarComputador());
