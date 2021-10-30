/*Transformar notas escolares 

    Crie um sistema que transforme as notas do sistema numérico para sistema de notas em caracteres tipo A B C
*/

// de 90 para cima - A
// entre 80 - 89 -   B
// entre 70 - 79 -   C
// entre 60 - 69 -   D
// menor que 60 -    F



function getScore(score) {
  let scoreA = score >= 90 && score <= 100;
  let scoreB = score >= 80 && score <= 89;
  let scoreC = score >= 70 && score <= 79;
  let scoreD = score >= 60 && score <= 69;
  let scoref = score < 60 && score >= 0;
  let scoreFinal;
  
  if (scoreA) {
    scoreFinal = "A";
  } else if(scoreB) {
    scoreFinal = "B";
  }else if(scoreC) {
    scoreFinal = "C";
  }else if(scoreD) {
    scoreFinal = "D";
  } else if(scoref) {
    scoreFinal = "F";
  } else {
   scoreFinal = "nota invalida"
  }
  return scoreFinal;
}
console.log(getScore(101));
console.log(getScore(100));
console.log(getScore(80));
console.log(getScore(70));
console.log(getScore(62));
console.log(getScore(50));
