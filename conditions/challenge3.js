const prompt = require('prompt-sync')();

const nbr1 = Number( prompt('entrer 1er nbr ') );
const nbr2 = Number( prompt('entrer 2er nbr ') );

if (nbr1 == nbr2){
    console.log((nbr1+nbr2)*3);
}else{
    console.log(nbr1+nbr2);
}