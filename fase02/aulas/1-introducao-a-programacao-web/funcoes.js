/*
  Criar um programa que calcula a média das turmas
  de alunos e envia mensagem do cálculo da média.
  Utilizando-se estrutura de repetição dessa vez.
  const -> variável constante que não muda
  let -> variável que é variável rs
*/

const alunosTurmaA = [
  {
    nome: "Daury",
    nota: 10,
  },
  {
    nome: "Pedro",
    nota: 9,
  },
];

const alunosTurmaB = [
  {
    nome: "Ellen",
    nota: 5,
  },
  {
    nome: "Henrique",
    nota: 4,
  },
  {
    nome: "Mari",
    nota: 2,
  },
];

function calculaMedia(alunos) {
  let soma = 0;
  for (let i = 0; i < alunos.length; i++) {
    soma += alunos[i].nota;
  }
  return soma / alunos.length;
}

const media1 = calculaMedia(alunosTurmaA);
const media2 = calculaMedia(alunosTurmaB);

function enviaMensagem(media, turma) {
  // essa é uma maneira de fazer um if-else mais enxuto
  if (media > 5) console.log(`A média da ${turma} foi de ${media}. Parabéns!`);
  else console.log(`A média da ${turma} é menor que 5.`);
}

enviaMensagem(media1, "Turma A");
enviaMensagem(media2, "Turma B");
