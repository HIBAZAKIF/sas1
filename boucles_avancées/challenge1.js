const prompt = require('prompt-sync')();

const nbr = Number(prompt("entrer un nbr : "));

for(let i = 10 ; i >= 0 ; i-- ){
    console.log(`${nbr} * ${i} = ${nbr*i}`);
}

