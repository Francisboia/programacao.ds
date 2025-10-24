let senha = "";

// Expressões regulares
const temLetra = /[a-zA-Z]/; // Verifica se há pelo menos uma letra
const temNumero = /[0-9]/;   // Verifica se há pelo menos um número

while (!temLetra.test(senha) || !temNumero.test(senha)) {
  senha = prompt("Digite uma senha com pelo menos 1 letra e 1 número:");

  if (!temLetra.test(senha) || !temNumero.test(senha)) {
    alert("Senha inválida! Deve conter pelo menos 1 letra e 1 número.");
  }
}

alert("✅ Senha válida!");

============================================

let idade = 0;

while (idade < 18 || idade > 60 || isNaN(idade)) {
  idade = Number(prompt("Digite sua idade (entre 18 e 60 anos):"));

  if (idade < 18 || idade > 60 || isNaN(idade)) {
    alert("Idade inválida! Digite um número entre 18 e 60.");
  }
}

alert(`Idade válida: ${idade} anos.`);

======================================== ================================

  let numero;
let tentativas = 0;

while (true) {
  // Gera um número aleatório entre 1 e 100
  numero = Math.floor(Math.random() * 100) + 1;
  tentativas++;

  console.log(`Número gerado: ${numero}`);

  // Testa múltiplas condições: múltiplo de 3 e de 5
  if (numero % 3 === 0 && numero % 5 === 0) {
    console.log(`\n✅ Encontrado! O número ${numero} é múltiplo de 3 e de 5.`);
    console.log(`Foram necessárias ${tentativas} tentativas.`);
    break; // Sai do loop
  }
}

=======================================================================================

let tamanho = 0;

while (tamanho < 34 || tamanho > 44) {
  tamanho = Number(prompt("Digite seu tamanho de calçado (entre 34 e 44):"));

  if (tamanho < 34 || tamanho > 44) {
    alert("Valor inválido! O tamanho deve estar entre 34 e 44.");
  }
}

alert(`Tamanho válido: ${tamanho}`);

========================================================================================

  let soma = 0;
let contador = 0;

while (soma <= 500) {
  // Gera um número aleatório entre 1 e 100
  const numero = Math.floor(Math.random() * 100) + 1;

  soma += numero;
  contador++;

  console.log(`Número gerado: ${numero} | Soma atual: ${soma}`);
}

console.log(`\nA soma ultrapassou 500 após ${contador} números.`);

=============================================================================================

  let palavra = "";

// Solicita ao usuário até que a palavra tenha mais de 8 letras
while (palavra.length <= 8) {
  palavra = prompt("Digite uma palavra com mais de 8 letras:");
  
  if (palavra.length <= 8) {
    alert("A palavra deve ter mais de 8 letras. Tente novamente!");
  }
}

alert(`Palavra válida: ${palavra} (${palavra.length} letras)`);
