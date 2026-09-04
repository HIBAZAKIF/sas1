const prompt = require('prompt-sync')();

const nbr = Number(prompt("entrer un nbr : "));

function compteRebours (n){
    for(let i = n ; i >= 0 ; i-- ){
        console.log(i);
    }
}

compteRebours(nbr);


