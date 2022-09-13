// Crie uma classe chamada Game - abstração de jogos virtuais
// 	- nome (string)
// 	- tamanho (numero)
// 	- genero (string, "R" = rpg, "C"= corrida, "F" = fps, "O" = outro)
// 	- minRam (numero) (opcional)

// 2) Crie o construtor da classe com os atributos obrigatórios como parâmetro

// 3) Mantenha os atributos encapsulados

class Game {
  private _nome: String;
  private _tamanho: number;
  private _genero: String;
  private _minRam: number;

  constructor(nome: String, tamanho: number, minRam: number) {
    this._nome = nome;
    this._tamanho = tamanho;
    this._minRam = minRam;
  }

  public getNome() {
    return this._nome;
  }
}
