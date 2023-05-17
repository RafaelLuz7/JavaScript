function rand([min = 0, max = 1000]) {
    if (min > max) [min, max] = [max, min];
    const ramdom  = Math.random();
    const valor = ramdom * (max - min) + min;
    return Math.floor(valor);
}

console.log(rand([50, 40]));
console.log(rand([992]));
console.log(rand([, 10]));
