const prompt = require('prompt-sync')();

const nbr = Number(prompt('QEntrez un nbr '));

if (nbr%2 == 0){
    console.log("le nombre est paire");
}else {
    console.log("le nombre est impaire");
}