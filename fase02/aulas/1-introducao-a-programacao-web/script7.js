// vetor (array) lista de objetos que podem ser acessado por uma única variável

const alunos = [
  {
    nome: "Daury",
    nota: 10,
  },
  {
    nome: "Pedro",
    nota: 9.5,
  },
];

console.log((alunos[0].nota + alunos[1].nota) / 2);
