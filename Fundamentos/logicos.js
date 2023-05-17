function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2;
    const comprarTv50 = trabalho1 && trabalho2;
    const comprarTVbit = !!(trabalho1 ^ trabalho2) // bitwise xor
    const comprarTV32 = trabalho1 != trabalho2;
    const manterSaudavel = !comprarSorvete// operador unario
    
    return { comprarSorvete, comprarTv50, comprarTVbit, comprarTV32, manterSaudavel};

}

console.log(compras(true, true));
console.log(compras(true, false));
console.log(compras(!true, true));
console.log(compras(true, !false));
