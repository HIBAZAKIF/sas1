const prompt = require('prompt-sync')();

const nbr = Number(prompt("entrer un nbr : "));
let counter = 1 ;
let nbr_impaire = 0;

while( nbr_impaire < nbr ){
    if( counter % 2 != 0 ){
        console.log(counter);
        nbr_impaire++;
    }
    counter++;
}