/* Busca por tecnologia */

const usuarios = [
  {
    nome: "Daury",
    tecnologias: ["CSS", "JS"],
  },
  {
    nome: "Pedro",
    tecnologias: ["HTML", "Node.js"],
  },
  {
    nome: "Mari",
    tecnologias: ["HTML", "CSS"],
  },
];

function checaSeUsuarioUsaCSS(usuario) {
  // Percorre o array de tecnologias do usuário até encontrar se ele trabalha com CSS
  for (let i = 0; i < usuario.tecnologias.length; i++) {
    if (usuario.tecnologias[i] === "CSS") {
      return true;
    }
  }
  return false;
}

for (let i = 0; i < usuarios.length; i++) {
  const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(usuarios[i]);

  if (usuarioTrabalhaComCSS) {
    console.log(`O usuário ${usuarios[i].nome} trabalha com CSS`);
  }
}
