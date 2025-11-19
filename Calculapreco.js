function calcularPrecoFinal(produto) {
  const desconto = produto.desconto ?? 0;

  const precoFinal = produto.preco - (produto.preco * desconto / 100);

  console.log(`Preço final de ${produto.nome}: R$ ${precoFinal.toFixed(2)}`);
  console.log(`Preço final de ${produto.nome}: R$ ${produto.preco}`);

}

// Exemplo de uso

const produto1 = {

  nome: "Fone de ouvido",

  preco: 200,

  desconto: 25

};

calcularPrecoFinal(produto1);
