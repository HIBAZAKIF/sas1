const prompt = require('prompt-sync')();

const nbr = Number(prompt('Entrez le nbr : '));
let pr = Math.floor(nbr/1000) 
let de = Math.floor((nbr/100)%10) 
let tr = Math.floor((nbr/10)%10) 
let qu = nbr%10 

console.log(qu , tr , de , pr);

