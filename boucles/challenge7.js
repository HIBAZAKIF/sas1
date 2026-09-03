const prompt = require('prompt-sync')();

const nbr = prompt("entrer un nbr : ");
let sum = "";
let compte = nbr.length;

while (compte >  0){
    sum = sum + nbr[compte-1];
    compte-- ;
}
console.log(sum)

