let n1 = 6.5545681;
let n2 = 7.0;
let media = (n1 + n2)/2;
let a = Number("6");

console.log(Number.isInteger(n2));
console.log(Number.isInteger(a));
console.log(media);
console.log(media.toFixed(2));
console.log(media.toString(2));// 2 na função toString converte em numero binário
console.log(typeof(media));

//cuidados a se tomar com Number
console.log(7/0); // no javascript se torna infinito
console.log("10"/2); // javascript possui tipagem fraca, por isso isso da certo
let t ="10";
let b = 2;
let c = t/b;
console.log(typeof(c)); 
const e = 5;
const r = "2";
const y = e  + + r; // usar + + faz um casting da string para number
console.log(y);



