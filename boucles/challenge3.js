const prompt = require('prompt-sync')();

const nbr = Number(prompt("entrer un nbr : "));
let sum = nbr;

for (let i = 1 ; i < nbr ; i++ ){
    sum = sum + i ;
}

console.log(sum);