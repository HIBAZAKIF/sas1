const prompt = require('prompt-sync')();

const nbr = Number(prompt("entrer un nbr : "));
let sum = 0

for(let i = 0 ; i <= nbr  ; i++){
    sum +=  i ;
}
console.log(sum);

