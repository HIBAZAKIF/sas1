const prompt = require('prompt-sync')();

const a = Number(prompt("entrer un nbr : "));
const b = Number(prompt("entrer un nbr a : "));

function max(c,d){
    if(c > d ){
        return c ;
    }else if (d > c ){
        return d;
    }else{
        return "entrer deux nbr differents";
    }
}
let resultat = max(a,b);
console.log(resultat);