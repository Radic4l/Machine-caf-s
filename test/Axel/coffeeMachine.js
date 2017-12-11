
function DoubleExp(Sucre) {
  if (Sucre === 0) {
  console.log("Double Expresso sans sucre");
  console.log("+ 1 Dose de Café");
  console.log("+ Dose d'eau");
  }
  else {
  console.log("Double Expresso");
  console.log("+ 1 Dose de Café");
  console.log("+ Dose d'eau");
  console.log("avec " +Sucre+ " sucre");
  }
}

function Latte(Sucre) {
  if (Sucre === 0) {
  console.log ("Latte sans sucre");
  console.log("1 Dose de café");
  console.log("+ 1 Dose d'eau");
  console.log("+ 1 Dose de lait");
  }
  else {
  console.log ("Latte");
  console.log("1 Dose de café");
  console.log("+ 1 Dose d'eau");
  console.log("+ 1 Dose de lait");
  console.log( "avec " +Sucre+ " sucre");

  }
}

function List() {
  for (let nbsucre=0; nbsucre <= 5; nbsucre++) {
  DoubleExp(nbsucre);
  }
   for (let nbsucre=0; nbsucre <= 5; nbsucre++) {
  Latte(nbsucre);
  }

}
List();
