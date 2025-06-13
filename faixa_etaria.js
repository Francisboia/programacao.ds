
let idade = 28;
let categoria;

if (idade < 12) {
  categoria = "Criança";
} else if (idade >= 12 && idade < 18) {
  categoria = "Adolescente";
} else if (idade >= 18 && idade < 30) {
  categoria = "jovem Adulto";
} else if (idade >= 30 && idade < 60) {
  categoria = "jovem Adulto";
} else {
  categoria = "Idoso";
}

console.log("A pessoa é classificada como: " + categoria);

