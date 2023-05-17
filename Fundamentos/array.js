const valores = [7.7,8.9,6.3,9.2];
console.log(valores[0], valores[3]);
console.log(valores[4]);
valores[4] = 10;
console.log(valores);
console.log(valores.length);

valores.push({id: 3}, false, null, 'teste');// acrescenta no array
console.log(valores);

console.log(valores.pop());//retira do array o ultimo valor
console.log(valores);
delete valores[0]; // deleta do array
console.log(valores);
const a = [1,2,3,4];
console.log(a.pop());
console.log(a);
const valoresReais =  valores.filter(function(elementos){return elementos != null;}); // filtrando valores nulls e undefined
console.log(valoresReais);