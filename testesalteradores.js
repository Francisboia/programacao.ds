// Exercício 10 - Enviar e-mails de agradecimento com for...of

const clientes = ["Ana", "Bruno", "Carla", "Diego", "Eduarda"];

for (const cliente of clientes) {
  console.log(`Enviando e-mail de agradecimento para ${cliente}.`);
}
// Exercício 12 - Filtrar compras dos últimos 30 dias com forEach

const compras = [
  { cliente: "Ana", data: "2025-10-20" },
  { cliente: "Bruno", data: "2025-09-25" },
  { cliente: "Carla", data: "2025-11-02" },
  { cliente: "Diego", data: "2025-10-05" },
  { cliente: "Eduarda", data: "2025-11-01" },
  { cliente: "Felipe", data: "2025-08-30" },
  { cliente: "Gabriela", data: "2025-10-29" },
  { cliente: "Henrique", data: "2025-10-15" },
  { cliente: "Isabela", data: "2025-11-03" },
  { cliente: "João", data: "2025-09-15" }
];

const hoje = new Date();

compras.forEach(compra => {
  const dataCompra = new Date(compra.data);
  const diffDias = (hoje - dataCompra) / (1000 * 60 * 60 * 24);
  if (diffDias <= 30) {
    console.log(`Cliente recente: ${compra.cliente}`);
  }
});
// Exercício 14 - Remover nomes duplicados com Set e iterador

const nomes = ["Ana", "Bruno", "Ana", "Carla", "Bruno", "Diego"];
const nomesUnicos = new Set(nomes);

for (const nome of nomesUnicos) {
  console.log(nome);
}
