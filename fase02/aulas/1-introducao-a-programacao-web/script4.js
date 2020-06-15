// DESAFIO 1

// Verificar se a pessoa é maior de 18 anos
const pessoa = "Daury";
const idade = 32;

if (idade >= 18) {
  console.log(`${pessoa} tem mais de 18 anos. Pode entrar.`);
} else if (idade === 17) {
  console.log(`${pessoa} tem 17 anos. Volte quando completar 18 anos.`);
} else {
  console.log(`${pessoa} é menor de idade. Vai pra casa!`);
}
