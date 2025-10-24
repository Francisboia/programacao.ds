// Função que busca um produto pelo nome
function buscarProduto(listaProdutos, nomeProduto) {
  // Percorre a lista de produtos
  for (let i = 0; i < listaProdutos.length; i++) {
    // Verifica se o nome do produto atual corresponde ao nome buscado
    if (listaProdutos[i].nome === nomeProduto) {
      return listaProdutos[i]; // Retorna o objeto do produto encontrado
    }
  }
  // Caso o produto não seja encontrado, retorna null
  return null;
}

// --- Exemplo de uso ---
// Lista de produtos fictícia
const produtos = [
  { nome: "Notebook", preco: 3500 },
  { nome: "Mouse", preco: 80 },
  { nome: "Teclado", preco: 120 },
  { nome: "Monitor", preco: 900 }
];

// Busca por um produto existente
const resultado1 = buscarProduto(produtos, "Mouse");
console.log(resultado1);
// Resultado esperado: { nome: 'Mouse', preco: 80 }

// Busca por um produto inexistente
const resultado2 = buscarProduto(produtos, "Impressora");
console.log(resultado2);
// Resultado esperado: null
