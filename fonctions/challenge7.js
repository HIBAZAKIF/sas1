const prompt = require('prompt-sync')();

const nbr = Number(prompt("entrer un nbr : "));

function compteRebours (n){
    for(let i = 1 ; i >= n ; i++){
        console.log(i);
        if( i % 2 == 0){
            //console.log(i);
        }
        
    }
}

let resultat = compteRebours(nbr);
console.log(resultat);

