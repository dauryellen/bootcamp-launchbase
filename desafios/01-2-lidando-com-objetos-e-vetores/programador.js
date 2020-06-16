/* Programa que armazena dados de um programador */

const programador = {
  nome: "Daury",
  idade: 32,
  tecnologias: [
    {
      nome: "HTML",
      especialidade: "Acessibilidade Web",
    },
    {
      nome: "CSS",
      especialidade: "Responsividade",
    },
    {
      nome: "Javascript",
      especialidade: "Web",
    },
  ],
};

console.log(
  `O usuário ${programador.nome} tem ${programador.idade} anos e usa a tecnologia ${programador.tecnologias[0].nome} com especialidade em ${programador.tecnologias[0].especialidade}.`,
);
