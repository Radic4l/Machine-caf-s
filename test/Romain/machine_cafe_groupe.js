function selectDrink (doSelect, drink){
      if (doSelect === true && drink === 'expresso'){
      $('.boutonExpresso').attr("src", "Expresso_click.png");
      };
};
function resetDrink(){
	
}
 
$(document).ready(function(){
      $('.boutonExpresso').click(function(){
      selectDrink(true, 'expresso');
      });
      $('.sucre+')
});
