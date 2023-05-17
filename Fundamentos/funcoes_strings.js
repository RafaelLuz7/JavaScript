const ESCOLA = "Cod3r";
const nome = "Rafa3l";

console.log(ESCOLA.charAt(4)); // charAt retorna um caracter da string
console.log(ESCOLA.charCodeAt(4));// codigo da tabela ASC
console.log(ESCOLA.indexOf("o")); // indice do caracter
console.log(ESCOLA.substring(1)); // imprime a partir da posição colocada
console.log(ESCOLA.substring(0,3)); // de um indice ate o outro
console.log('Rafael'.concat(" Luz ").concat(ESCOLA));//concatena strings
console.log(ESCOLA.replace(3, 'e')); // troca um caracter de uma string passando o (indice, caracter)

console.log('Rafael,Luz,Silva'.split(',')); // split transforma uma string em um array passando como parametro o caracter que ira separar os elementos 

let a = 'Rafael,Luz,Silva'.split(',');
console.log(typeof(a));
console.log(nome.replace(3, 'e'));