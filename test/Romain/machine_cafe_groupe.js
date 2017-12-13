//début code sélection boisson
$(document).ready(function(){
     $('.boutonExpresso').click(function(){
      	selectDrink(true, 'expresso');
      });
     $('.boutonExpresso').dblclick(function(){
      	selectDrink(false, 'expresso'); //le double clique permet de déselectionner la boisson
      });
     $('.boutonLatte').click(function(){
      selectDrink(true, 'latte');
      });
      $('.boutonLatte').dblclick(function(){
      selectDrink(false, 'latte');
	  });
	  $('.btnPlus').mousedown(function(){
    		$('.btnPlus').attr('src','../../asset/img/Vue1/Selection_sucre/button-+-active.png')
    	});
    	$('.btnPlus').mouseup(function(){
    		$('.btnPlus').attr('src','../../asset/img/Vue1/Selection_sucre/button-+-inactive.png')
    	});
    	   $('.btnMoins').mousedown(function(){
    		$('.btnMoins').attr('src','../../asset/img/Vue1/Selection_sucre/button---active.png')
    	});
    	$('.btnMoins').mouseup(function(){
    		$('.btnMoins').attr('src','../../asset/img/Vue1/Selection_sucre/button---inactive.png')
    	});


function selectDrink (doSelect, drink){
      if (doSelect === true && drink === 'expresso'){
      	$('.boutonExpresso').attr("src", "Expresso_click.png");
	   } 	else {
	      		$('.boutonExpresso').attr("src", "Choixboisson_expresso.png");
	      	} 		if (doSelect === true && drink === 'latte'){
	      				$('.boutonLatte').attr("src", "Latte_click.png");
		      		} 		else {
		      					$('.boutonLatte').attr("src", "Choixboisson_Latte.png");
	      					};
};
//fin code boisson

//début code sucre
let sugar = 0;
		let nbSugar = [];
		$('.btnPlus').click(function(){
			if (sugar < 5){
				sugar = sugar + 1;
				if (sugar === 1){
					$('.sugar1').css('opacity', 1);
				};
				if (sugar === 2){
					$('.sugar2').css('opacity', 1);
				};
				if (sugar === 3){
					$('.sugar3').css('opacity', 1);
				};
				if (sugar === 4){
					$('.sugar4').css('opacity', 1);
				};
				if (sugar === 5){
					$('.sugar5').css('opacity', 1);
				};
			}
			console.log(sugar);
		});
			$('.btnMoins').click(function(){
			if (sugar > 0 ){
				sugar = sugar - 1;
				if (sugar === 0){
					$('.sugar1').css('opacity', 0);
				};
				if (sugar === 1){
					$('.sugar2').css('opacity', 0);
				};
				if (sugar === 2){
				
					$('.sugar3').css('opacity', 0);
				};
				if (sugar === 3){
				
					$('.sugar4').css('opacity', 0);
				};
				if (sugar === 4){
					
					$('.sugar5').css('opacity', 0);
				};
				
			}
			console.log(sugar);
		});
 //fin code sucre

//début insertCoin
let coinInser = 0
function addCoins(coin){
	if (coin === '1euro'){
		coinInser = coinInser+1;
		console.log((coinInser).toFixed(2) + " €");
	};
};
$('.1euro').click(function(){
	addCoins('1euro');
});


//début fonction retour monnaie
function renduMonnaie (sommeEntree, cout)

/* renduMonnaie pour calculer la monnaie à rendre.
Les tableaux me permettent de définir quels types de pièces rendre
avec la quantité dispo pour chacune.
La boucle while pour savoir que si le billet est dispo et qu'il est > au montant à rendre, il pioche dedans,
la boucle redémmare jusqu'à...*/

{ 
  let piecesExistantes = [200,100,50,20,10];
  let piecesDispo = [5,10,10,10,10];
  let pieces = [];
  let monnaie = (sommeEntree - cout);
  	console.log(monnaie);
      while (monnaie > 0)
        {
          if(monnaie >= 200 && piecesDispo[0] > 0)
            {
              pieces.push(200);
              monnaie=monnaie-200;
              piecesDispo[0] = piecesDispo[0]-1;
            }
          else if (monnaie >= 100 && piecesDispo[1] > 0)
            {
              pieces.push(100);
             monnaie=monnaie-100;
               piecesDispo[1] = piecesDispo[1]-1;
            }
          else if (monnaie >= 50 && piecesDispo[2] > 0)
            {
              pieces.push(50);
             monnaie=monnaie-50;
               piecesDispo[2] = piecesDispo[2]-1;
            }
          else if (monnaie >= 20 && piecesDispo[3] > 0)
            {
              pieces.push(20);
             monnaie=monnaie-20;
               piecesDispo[3] = piecesDispo[3]-1;
            } 
           else if (monnaie >= 10 && piecesDispo[4] > 0)
            {
              pieces.push(10);
             monnaie=monnaie-10;
               piecesDispo[4] = piecesDispo[4]-1;
            };
          
         
        };
  console.log(pieces);
  console.log(piecesDispo);
  console.log(monnaie);
   return sommeEntree - cout;
};
let monnaieRendue = renduMonnaie(100,10);

$('.aRendre p').html("Montant à rendre " + monnaieRendue );
});