//Implémentez​ ​une​ ​fonction​ ​​selectDrink(doSelect,​ ​drink)​​
// ​dont​ ​le​ ​premier​ ​ingrédient est​ ​un​ ​​booléen​​ ​et​ ​le​ ​second​ ​le​ ​nom​ ​de​ ​la​ ​boisson//
//Code selection boisson fonctionnel//
$(document).ready(function(){

	$('.btn-latte').click(function(){
		selectDrink(true, 'latte');
	});
	$('.btn-latte').dblclick(function(){	
		selectDrink(false, 'latte');// Implémentez​ ​une​ ​fonction​ ​​resetDrink()​ ​​qui​ ​désélectionne​ ​toutes​ ​les​ ​boissons: le dblclick permet de reset les drink//
	});
	$('.btn-expresso').click(function(){
		selectDrink(true, 'expresso');
	});
	$('.btn-expresso').dblclick(function(){	
		selectDrink(false, 'expresso');
	});
	$('.btn-chocolat').click(function(){
		selectDrink(true, 'chocolat');
	});
	$('.btn-chocolat').dblclick(function(){	
		selectDrink(false, 'chocolat');
	});
	$('.btn-tea').click(function(){
		selectDrink(true, 'tea');
	});
	$('.btn-tea').dblclick(function(){	
		selectDrink(false, 'tea');
	});
	

function selectDrink(doSelect,drink){
	if (doSelect === true && drink === 'latte'){
		$('.btn-latte').attr("src", "Latte_click.png");
	}	else{
			$('.btn-latte').attr("src", "Choixboisson_Latte.png");
		};
			if (doSelect === true && drink === 'expresso'){
				$('.btn-expresso').attr("src", "expresso_click.png");
			}	else{
					$('.btn-expresso').attr("src", "Choixboisson_expresso.png");
				};
					if (doSelect === true && drink === 'chocolat'){
						$('.btn-chocolat').attr("src", "Chocolat_click.png");
					}	else{
							$('.btn-chocolat').attr("src", "Choixboisson_chocolat.png");
						};
							if (doSelect === true && drink === 'tea'){
								$('.btn-tea').attr("src", "Tea_click.png");
						}	else{
								$('.btn-tea').attr("src", "Choixboisson_tea.png");
							};


};
});
// fin code boisson opérationnel//


