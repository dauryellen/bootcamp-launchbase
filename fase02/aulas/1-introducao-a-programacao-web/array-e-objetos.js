/*
  Criar um programa que calcula a média das turmas
  de alunos e envia mensagem do cálculo da média.
*/

const alunosTurmaA = [
  {
    nome: "Daury",
    nota: 10,
  },
  {
    nome: "Pedro",
    nota: 9.5,
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
];

function calculaMedia(alunos) {
  return (alunos[0].nota + alunos[1].nota) / 2;
}

const media1 = calculaMedia(alunosTurmaA);
const media2 = calculaMedia(alunosTurmaB);

function enviaMensagem(media, turma) {
  if (media > 5) {
    // Verifica se é verdadeiro ou falso. Se for true faz alguma coisa
    console.log(`A média da ${turma} foi de ${media}. Parabéns!`);
  } else {
    // se for false faz outra coisa
    console.log(`A média da ${turma} é menor que 5.`);
  }
}

enviaMensagem(media1, "Turma A");
enviaMensagem(media2, "Turma B");
