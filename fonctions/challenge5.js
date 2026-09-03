const prompt = require('prompt-sync')();

const a = Number(prompt("entrer un nbr : "));

function factoriel(c){
    if(c < 0 ){
        return "le  nombre doit etre positif" ;
    }else{
        let count = c ;
        let fact = 1 ;
        while (count > 0){
            fact = fact*count ;
            count-- ;
        }
        return fact;
    }
}
let resultat = factoriel(a);
console.log(resultat);