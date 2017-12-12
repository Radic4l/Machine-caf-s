$(document).ready(function(){
	function selectDrink(doSelect, drink){
		if (doSelect === true && drink === 'the'){
			$('.btnThe').attr('src','../../asset/img/Vue1/Tea_click.png')
		}
		else{
			(doSelect === false)
			$('.btnThe').attr('src','../../asset/img/Vue1/Choixboisson_tea.png')
		}
	}

	$('.btnThe').click(function(){
		selectDrink(true, 'the')
	})
	$('.btnThe').dblclick(function(){
		selectDrink(false, 'the')
	});


});
