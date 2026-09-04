const prompt = require('prompt-sync')();

const nbr = prompt("entrer un nbr : ");
let a = Number(nbr);
let compteur = 0;

if (a > 0){
    for(let ch of nbr ){
        compteur++ ;
    }
}


console.log(compteur);

