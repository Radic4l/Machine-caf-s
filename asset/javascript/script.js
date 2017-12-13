$(document).ready(function(){
/////////////////Sergio/////////////////
function selectDrink(doSelect,drink){
    if (doSelect === true && drink === 'latte'){
        $('.btnLat').attr("src", "../img/Vue1/Latte_click.png");
    }else{
        $('.btnLat').attr("src", "../img/Vue1/Choixboisson_Latte.png");
    };
    if (doSelect === true && drink === 'expresso'){
        $('.btnExp').attr("src", "../img/Vue1/expresso_click.png");
    }else{
        $('.btnExp').attr("src", "../img/Vue1/Choixboisson_expresso.png");
    };
    if (doSelect === true && drink === 'chocolat'){
        $('.btnChoc').attr("src", "../img/Vue1/Chocolat_click.png");
    }else{
        $('.btnChoc').attr("src", "../img/Vue1/Choixboisson_chocolat.png");
    };
    if (doSelect === true && drink === 'tea'){
        $('.btnThe').attr("src",'../img/Vue1/Tea_click.png');
    }else{
        $('.btnThe').attr("src", '../img/Vue1/Choixboisson_tea.png');
    };
  };
    $('.btnPlus').mousedown(function(){
      $('.btnPlus').attr('src','../img/Vue1/Selection_sucre/button-+-active.png')
    })
    $('.btnPlus').mouseup(function(){
      $('.btnPlus').attr('src','../img/Vue1/Selection_sucre/button-+-inactive.png')
    })
       $('.btnMoins').mousedown(function(){
      $('.btnMoins').attr('src','../img/Vue1/Selection_sucre/button---active.png')
    })
    $('.btnMoins').mouseup(function(){
      $('.btnMoins').attr('src','../img/Vue1/Selection_sucre/button---inactive.png')
    })

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

$('.btnLat').click(function(){
      selectDrink(true, 'latte');
  });
  $('.btnLat').dblclick(function(){
      selectDrink(false, 'latte');// Implémentez​ ​une​ ​fonction​ ​​resetDrink()​ ​​qui​ ​désélectionne​ ​toutes​ ​les​ ​boissons: le dblclick permet de reset les drink//
  });
  $('.btnExp').click(function(){
      selectDrink(true, 'expresso');
  });
  $('.btnExp').dblclick(function(){
      selectDrink(false, 'expresso');
  });
  $('.btnChoc').click(function(){
      selectDrink(true, 'chocolat');
  });
  $('.btnChoc').dblclick(function(){
      selectDrink(false, 'chocolat');
  });
  $('.btnThe').click(function(){
      selectDrink(true, 'tea');
  });
  $('.btnThe').dblclick(function(){
      selectDrink(false, 'tea');
  });


/////////////////Axel/////////////////



/////////////////Anna/////////////////



/////////////////Romain/////////////////


});
