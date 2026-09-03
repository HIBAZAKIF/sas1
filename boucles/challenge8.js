const prompt = require('prompt-sync')();

const nbr = Number(prompt("entrer un nbr : "));

let ancien = 0;
let nouveau = 1;
let nouveau_ancien = 0 ;
for(let i = 1 ; i < nbr ; i++){
    nouveau_ancien = nouveau ; 
    nouveau = nouveau + ancien;
    ancien = nouveau_ancien;
}
console.log(nouveau);

