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

// function selectSugar(selectMore){
// 	if (selectMore === true){
// 		$('.sucre+').attr("src", "btn-sucre-plus-choisi.png");
// 	};
// };
 

     
      // $('.sucre+').click(function(){
      // 	selectSugar(true);
      // });
});
