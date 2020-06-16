// objetos - são "moldes" ou abstrações de alguma coisa
// coleção de propriedades que recebem valores ou funcionalidades

const aluno01 = {
  nome: "Daury", // propriedade do objeto aluno01
  nota: 10, // propriedade do objeto aluno01
};

const aluno02 = {
  nome: "Pedro", // propriedade do objeto aluno02
  nota: 9.5, // propriedade do objeto aluno02
};

// usa-se o "." para acessar as propriedades de um objeto
const media = (aluno01.nota + aluno02.nota) / 2;

console.log(media);
