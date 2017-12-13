$(document).ready(function(){
/////////////////Sergio/////////////////
    function selectDrink(doSelect,drink){
          if (doSelect === true && drink === 'latte'){
              $('.btnLat').attr("src", "img/Vue1/Latte_click.png");
          }else{
              $('.btnLat').attr("src", "img/Vue1/Choixboisson_Latte.png");
          };
          if (doSelect === true && drink === 'expresso'){
              $('.btnExp').attr("src", "img/Vue1/expresso_click.png");
          }else{
              $('.btnExp').attr("src", "img/Vue1/Choixboisson_expresso.png");
          };
          if (doSelect === true && drink === 'chocolat'){
              $('.btnChoc').attr("src", "img/Vue1/Chocolat_click.png");
          }else{
              $('.btnChoc').attr("src", "img/Vue1/Choixboisson_chocolat.png");
          };
          if (doSelect === true && drink === 'tea'){
              $('.btnThe').attr("src",'img/Vue1/Tea_click.png');
          }else{
              $('.btnThe').attr("src", 'img/Vue1/Choixboisson_tea.png');
          };
          if (doSelect === true){
            $('.2euros').attr('src', 'img/Vue1/2_euros.png')
            $('.1euro').attr('src', 'img/Vue1/1_euros.png')
            $('.50cts').attr('src', 'img/Vue1/50_cen.png')
            $('.20cts').attr('src', 'img/Vue1/20_cen.png')
            $('.10cts').attr('src', 'img/Vue1/10_cen.png')
            $('.5cts').attr('src', 'img/Vue1/5_cen.png')
          }
          else{
            $('.2euros').attr('src','img/Vue1/2euros_selec.png')
            $('.1euro').attr('src', 'img/Vue1/1euro_selec.png')
            $('.50cts').attr('src', 'img/Vue1/50cen_selec.png')
            $('.20cts').attr('src', 'img/Vue1/20cen_selec.png')
            $('.10cts').attr('src', 'img/Vue1/10cen_selec.png')
            $('.5cts').attr('src', 'img/Vue1/5cen_selec.png')
          }
    };
////////////////// BUTTON TO SELECT DRINK /////
    $('.btnLat').click(function(){
        selectDrink(true, 'latte');
        $('.boiChoi').text('Latte – 0.60 cts');
        $('.coins input').prop('disabled', false);
    });
    $('.btnLat').dblclick(function(){    
        selectDrink(false, 'latte');// Implémentez​ ​une​ ​fonction​ ​​resetDrink()​ ​​qui​ ​désélectionne​ ​toutes​ ​les​ ​boissons: le dblclick permet de reset les drink//
        $('.boiChoi').text(' ');
        $('.coins input').prop('disabled', true);
    });
    $('.btnExp').click(function(){
        selectDrink(true, 'expresso');
        $('.boiChoi').text('Expresso – 0.50 cts');
        $('.coins input').prop('disabled', false);
    });
    $('.btnExp').dblclick(function(){    
        selectDrink(false, 'expresso');
        $('.boiChoi').text(' ');
        $('.coins input').prop('disabled', true);
    });
    $('.btnChoc').click(function(){
        selectDrink(true, 'chocolat');
        $('.boiChoi').text('Chocolat – 0.60 cts');
        $('.coins input').prop('disabled', false);
    });
    $('.btnChoc').dblclick(function(){    
        selectDrink(false, 'chocolat');
        $('.boiChoi').text(' ');
        $('.coins input').prop('disabled', true);
    });
    $('.btnThe').click(function(){
        selectDrink(true, 'tea');
        $('.boiChoi').text('Thé – 0.50 cts');
        $('.coins input').prop('disabled', false);
    });
    $('.btnThe').dblclick(function(){    
        selectDrink(false, 'tea');
        $('.boiChoi').text(' ');
        $('.coins input').prop('disabled', true);
    });

///////////////////Button + and - sugar when clicked //////////////
      $('.btnPlus').mousedown(function(){
        $('.btnPlus').attr('src','img/Vue1/Selection_sucre/button-+-active.png')
      })
      $('.btnPlus').mouseup(function(){
        $('.btnPlus').attr('src','img/Vue1/Selection_sucre/button-+-inactive.png')
      })
         $('.btnMoins').mousedown(function(){
        $('.btnMoins').attr('src','img/Vue1/Selection_sucre/button---active.png')
      })
      $('.btnMoins').mouseup(function(){
        $('.btnMoins').attr('src','img/Vue1/Selection_sucre/button---inactive.png')
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
////////////////////// ADD COINS/////////
let prix = 0.50;

    let coins_ser = 0; 
    function addCoin(coin){
      if (coin === '2euros'){
        coins_ser = coins_ser + 2;
      }else if (coin === '1euro'){
        coins_ser = coins_ser + 1;
      }else if (coin === '50cts'){
        coins_ser = coins_ser + 0.5;
      }else if (coin === '20cts'){
        coins_ser = coins_ser + 0.2;
      }else if (coin === '10cts'){
        coins_ser = coins_ser + 0.1;
      }else if (coin === '5cts'){
        coins_ser = coins_ser + 0.05;
      };
      if (coins_ser > prix){
          let aRendre = coins_ser-prix;
          if (aRendre > 1){
            $('.messageRendu p').text('A rendre: ' +(aRendre).toFixed(2)+ ' €');
          }else{
            $('.messageRendu p').text('A rendre: ' +(aRendre).toFixed(2)+ ' cts');
          }
      }
      console.log(coins_ser)
    };

    $('.2euros').click(function(){
      addCoin('2euros');
      $('.affPieces').text('Montant inséré: ' +(coins_ser).toFixed(2)+ ' €');
    });

    $('.1euro').click(function(){
      addCoin('1euro');
      $('.affPieces').text('Montant inséré: ' +(coins_ser).toFixed(2)+ ' €');
    });

    $('.50cts').click(function(){
      addCoin('50cts');
      $('.affPieces').text('Montant inséré: ' +(coins_ser).toFixed(2)+ ' €');
    });
    $('.20cts').click(function(){
      addCoin('20cts');
      $('.affPieces').text('Montant inséré: ' +(coins_ser).toFixed(2)+ ' €');
    });
    $('.10cts').click(function(){
      addCoin('10cts');
      $('.affPieces').text('Montant inséré: ' +(coins_ser).toFixed(2)+ ' €');
    });

    $('.5cts').click(function(){
      addCoin('5cts');
      $('.affPieces').text('Montant inséré: ' +(coins_ser).toFixed(2)+ ' €');
    });

///////////////////////////  FUNCTION TO RESET ALL ///////
    function resetAll(){
        $('.affPieces').text(' ');
        coins_ser = 0;
        $('.boiChoi').text(' ');
        selectDrink(false);
        $('.coins input').prop('disabled', true);
        sugar = 0;
        $('.sugar1, .sugar2, .sugar3, .sugar4, .sugar5').css('opacity', 0);
        aRendre = 0;
        $('.monnaie').text('');

    }
    $('.reset').click(function(){
        resetAll();
    })

    $('.reset').mousedown(function(){
      $('.reset').attr('src','img/Vue1/button-cancel-pressed.png')
    })
    $('.reset').mouseup(function(){
      $('.reset').attr('src','img/Vue1/button-cancel.png')
    })



/////////////////Axel/////////////////



/////////////////Anna/////////////////



/////////////////Romain/////////////////


});
