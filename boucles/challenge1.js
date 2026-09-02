const prompt = require('prompt-sync')();

const nbr = prompt("entrer un nbr : ");

for (let i = 1 ; i <= 10 ; i++){
    console.log(`${nbr} * ${i} = ` , nbr*i );
}