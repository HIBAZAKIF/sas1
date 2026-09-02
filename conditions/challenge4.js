const prompt = require('prompt-sync')();

const a = prompt('entrer a : ');
const b = prompt('entrer b : ');
const c = prompt('entrer c : ');

let delta = (b**2) - 4*a*c ;

console.log(delta)

if (delta > 0 ){
    let x1 = ( (delta **(1/2)) -b )/ (2*a);
    let x2 = ( ( ( delta **(1/2) )*(-1) ) -b )/ (2*a);
    console.log(`x1 = ${x1} x2 = ${x2}`)
}else if (delta == 0) {
    let x3 = ( b*(-1) )/( 2*a );
    console.log(x3)
}else{
    console.log("lesquation na pas de solution");
}