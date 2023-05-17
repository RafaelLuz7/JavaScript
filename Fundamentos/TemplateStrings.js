const nome = 'Renata';
const concatenacao  = 'Ola ' + nome + '!';
const template = `
    Olá
    ${nome} !` // usando entre crases concatena uma string com variavel ${variavel} e respeitando quebras de linha


console.log(concatenacao, template); 
console.log(`1 + 1 = ${1+1}`);
const up = texto => texto.toUpperCase();
console.log(`Ei... ${up('cuidado')}!`);// possivel chamar funcoes
console.log(typeof(up));