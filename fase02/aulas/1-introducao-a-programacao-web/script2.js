// comentários - mensagens que não aparecem na tela mas que informam quem estiver lendo o código

/* 
  Criar um programa que calcula a média  das notas entre os alunos 
  e envia mensagem do cálculo da média. Se a média for maior que 5, parabenizar a turma.
*/

// variável do tipo string pois está usando aspas - 3 maneiras (aspas duplas, aspas simples e crase/template string)
const aluno = "Daury";
const aluno2 = "Mari";
const aluno3 = "Pedro";
const aluno4 = `Pedro e ${aluno}`;

// variável do tipo number para números
const notaAluno = 9.8;
const notaAluno2 = 10;
const notaAluno3 = 9;

// importante nomear a variável com um nome que explicite para que ela serve
const media = (notaAluno + notaAluno2 + notaAluno3) / 3;

// estrutura de programação chamada de condicional
if (media > 5) {
  // Verifica se é verdadeiro ou falso. Se for true faz alguma coisa
  console.log(`A média foi de ${media}. Parabéns!`);
} else {
  // se for false faz outra coisa
  console.log("A média é menor que 5.");
}

console.log(aluno);
console.log(aluno2);
console.log(aluno3);
console.log(media);

// para saber o tipo da variável
//console.log(typeof notaAluno);
