const prompt = require('prompt-sync')();

const nbr = prompt("entrer un nbr : ");
let factoriel= nbr;

for (let i = 1 ; i < nbr ; i++){
    factoriel = factoriel * i ;
}
 console.log(factoriel)




