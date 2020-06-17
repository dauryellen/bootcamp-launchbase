/* boolean -> true or false */

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

/* 
  Marcar aluno como reprovado se a nota for
  menor que 5 e enviar uma mensagem
*/

function marcarComoReprovado(aluno) {
  aluno.reprovado = false;
  if (aluno.nota < 5) {
    aluno.reprovado = true;
  }
}

marcarComoReprovado(alunosTurmaA);

function enviarMensagemReprovado(aluno) {
  if (aluno.reprovado) {
    console.log(`O aluno ${aluno.nome} está reprovado!`);
  }
}

function alunoReprovado(alunos) {
  for (let aluno of alunos) {
    marcarComoReprovado(aluno);
    enviarMensagemReprovado(aluno);
  }
}

alunoReprovado(alunosTurmaA);
alunoReprovado(alunosTurmaB);
