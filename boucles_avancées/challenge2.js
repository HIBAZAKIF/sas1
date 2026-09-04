const prompt = require('prompt-sync')();

const nbr = Number(prompt("entrer un nbr : "));
let étoile = "";
let nbr_étoile = 1 
let nbr_espace = (nbr - 1)%2;
let espace = "" ;
let ligne = "";

// for (let i = 1 ; i <= nbr ; i++){

//     if( nbr_étoile % 2 == 0) {
//          nbr_étoile = nbr_étoile+1;
//     }
    
//     let nbr_espace = (nbr - nbr_étoile)/2;


//     //la chaine des espaces 
//     for (let compt_nbr_espace  = 1 ; compt_nbr_espace <= nbr_espace ; compt_nbr_espace++ ){
//         espace = espace + " " ;
//     }

//     //la chaine des étoiles
//         for (compt_nbr_étoile = 1 ; compt_nbr_étoile <= nbr_étoile ; compt_nbr_étoile++ ){
//             étoile = étoile + "*" ;
//     }
//     ligne = espace + étoile + espace ;
//     espace = "" ;
//     étoile = "" ;


//     console.log(ligne);
// }


for ( let i = 1 ; i <= nbr ; i++ ){
    nbr_espace = nbr_espace-2;
    nbr_etoile = nbr_étoile+2;

    for ( let compt_etoile = 1 ; compt_etoile <= nbr_etoile ; compt_etoile++ ){
        étoile += "*"; 
    }

    for ( let compt_espace = 1 ; compt_espace <= nbr_espace ; compt_espace++ ){
        espace += " "; 
    }

    ligne = espace + étoile + espace
    console.log(ligne);

}