const prompt = require('prompt-sync')();

const nbr = Number(prompt("entrer un nbr : "));

function parité (n){
    if( n % 2 == 0){
        return true ;
    }else{
        return false ;
    }
}

const result = parité(nbr);
console.log(result);

