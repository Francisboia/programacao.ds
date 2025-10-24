class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  apresentar() {
    console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
  }
}

// --- Exemplo de teste ---
// Criação de uma instância da classe Pessoa
const pessoa1 = new Pessoa("Ana", 25);

// Chamada do método apresentar()
pessoa1.apresentar();

// --- Resultado esperado no console ---
// Olá, meu nome é Ana e tenho 25 anos.
