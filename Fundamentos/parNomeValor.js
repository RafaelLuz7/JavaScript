// par nome/valor
const saudacao = 'Opa' //contexto léxico 1 (local que a variavel foi, nesse caso no documento)

function exec() {
    const saudacao = 'Eaeee' //contexto léxico 2
    return saudacao
}

// Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Rafael',
    idade: 25,
    peso: 85,
    endereco: { // contexto diferente do cliente, pode usar mesmos nomes
        logradouro: 'Rua', 
        numero: 123
    }
}

console.log(saudacao);
console.log(exec());
console.log(cliente);