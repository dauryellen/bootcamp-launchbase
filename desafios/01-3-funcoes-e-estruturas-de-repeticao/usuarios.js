/* Um programa que armazena um array de usuários (objetos) */

const usuarios = [
  {
    nome: "Daury",
    tecnologias: ["HTML", "CSS", "JS"],
  },
  {
    nome: "Pedro",
    tecnologias: ["JS", "Node.js"],
  },
  {
    nome: "Mari",
    tecnologias: ["HTML", "CSS"],
  },
];

//Percorre a lista de usuários com uma estrutura de repetição imprimindo em tela as informações dos usuários
for (let i = 0; i < usuarios.length; i++) {
  console.log(
    `${usuarios[i].nome} trabalha com ${usuarios[i].tecnologias.join(", ")}`,
  );
}
