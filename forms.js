
// 🧠 Desafio: Gerenciador de Dados de Usuários
// Estruturas utilizadas: Array, Set e Map

// Criação das estruturas
let listaNomes = [];            // Array que permite duplicatas
let conjuntoEmails = new Set(); // Set que não permite duplicatas
let mapaTelefones = new Map();  // Map que associa ID → Telefone

// Função auxiliar para entrada de dados
function pedirEntrada(mensagem) {
  return prompt(mensagem);
}

// ====== Cadastro dos Nomes ======
console.log("📋 Cadastro de Nomes dos Clientes:");
for (let i = 0; i < 10; i++) {
  let nome = pedirEntrada(`Digite o nome do cliente ${i + 1}:`);
  listaNomes.push(nome);
}

// ====== Cadastro dos E-mails ======
console.log("\n📧 Cadastro de E-mails (serão armazenados apenas únicos):");
for (let i = 0; i < 10; i++) {
  let email = pedirEntrada(`Digite o e-mail do cliente ${i + 1}:`);
  conjuntoEmails.add(email);
}

// ====== Cadastro dos Telefones ======
console.log("\n📞 Cadastro de Telefones por ID:");
for (let i = 0; i < 10; i++) {
  let id = pedirEntrada(`Digite o ID do cliente ${i + 1}:`);
  let telefone = pedirEntrada(`Digite o telefone do cliente ${i + 1}:`);
  mapaTelefones.set(id, telefone);
}

// ====== Exibição dos Dados ======
console.log("\n====================================");
console.log("📋 Lista de Nomes Cadastrados:");
listaNomes.forEach((nome, index) => {
  console.log(`${index + 1}. ${nome}`);
});

console.log("\n📧 Conjunto de E-mails Únicos:");
conjuntoEmails.forEach((email) => {
  console.log(`- ${email}`);
});

console.log("\n📞 Mapa de Telefones por ID:");
mapaTelefones.forEach((telefone, id) => {
  console.log(`ID: ${id} → Telefone: ${telefone}`);
});

console.log("====================================");
