import { Computador } from "./computador";
import { Game } from "./game";

let teste = new Computador("Intel Celeron", 4, 500);

let csgo = new Game("CS:GO", 450, "seila", 3); // 50
let diabloIII = new Game("DIABLO III", 1, "seila2");

teste.ligarComputador();
teste.instalarGame(csgo);
teste.instalarGame(diabloIII);

console.log(teste.resumoComputador());
