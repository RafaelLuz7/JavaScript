var numero = 1;
{
    let numero = 2;
    console.log('dentro =', numero);
}
console.log('fora =', numero);



for (let i = 0; i<10; i++){
    console.log(i);
}
//console.log(i);// com let não funciona fora do bloco

console.log('----------')
const funcs = [];


for (let i = 0; i<10; i++){
    funcs.push(function(){
        console.log(i);
    })
}
funcs[2]();
funcs[8]();