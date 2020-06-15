/* Programa para calcular a aposentadoria de uma pessoa */

/*const nome = "Daury";
const sexo = "F";
const idade = 32;
const contribuicao = 5;*/

/*const nome = "Pedro";
const sexo = "M";
const idade = 40;
const contribuicao = 12;*/

const nome = "Eu daqui há 50 anos";
const sexo = "F";
const idade = 82;
const contribuicao = 55;

if (sexo === "M") {
  if (contribuicao >= 35 && contribuicao + idade >= 95) {
    console.log(`${nome}, você pode se aposentar!`);
  } else {
    console.log(`${nome}, você ainda não pode se aposentar!`);
  }
} else if (sexo === "F") {
  if (contribuicao >= 30 && contribuicao + idade >= 85) {
    console.log(`${nome}, você pode se aposentar!`);
  } else {
    console.log(`${nome}, você ainda não pode se aposentar!`);
  }
}
