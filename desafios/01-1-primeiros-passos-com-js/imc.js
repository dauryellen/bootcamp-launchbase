/* Programa para calcular o IMC e nível de obesidade de uma pessoa */

const nome = "Daury";
const peso = 63;
const altura = 1.63;
const sexo = "F";

const imc = peso / (altura * altura);

if (imc >= 30) {
  console.log(`${nome} você está acima do peso.`);
} else {
  console.log(`${nome} você não está acima do peso.`);
}
