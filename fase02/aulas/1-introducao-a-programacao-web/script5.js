/* ====================================================
  OPERADORES LÓGICOS

  &&  "E" As duas condições devem ser verdadeiras para que
  a condição final seja verdadeira.

  || "OU" Uma das condições deve ser verdadeira para que a
  condição final seja verdadeira.

  !  "NÃO" Nega uma condição

  OPERADORES ARITMÉTICOS

  * Multiplicação
  / Divisão
  % Resto da divisão
  + Adição
  - Subtração
==================================================== */

console.log(5 === 5 && 3 === 3); // true
console.log(5 === 5 && 4 === 3); // false
console.log(5 === 4 || 4 === 3); // false
console.log(5 === 5 || 4 === 3); // true
console.log(5 > 4); // true
console.log(!(5 > 4)); // false

console.log(10 * 2);
console.log(10 / 2);
console.log(11 % 2);
console.log(10 + 2);
console.log(10 - 2);
