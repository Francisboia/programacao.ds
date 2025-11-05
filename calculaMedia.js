// Exercício 1 e 2 - Média de três notas (valores fixos)

function calcularMedia(n1, n2, n3) {
  return (n1 + n2 + n3) / 3;
}

// Versão ajustada para notas 6, 8 e 9.25
const media = calcularMedia(6, 8, 9.25);
console.log(`A média das notas é: ${media.toFixed(2)}`);
