
//console.log('Quelques ressources : ');
//console.log(' - https://www.w3schools.com/css/css_background.asp');

$(document).ready(function(){
  function selectDrink (doSelect, drink) {
    let doSelect
    let drink
  };
  $(".btn-b").click(function(){
    if (doSelect === true) {
      $(".led-off.led-drink").attr("class", "led-on")
    }
    else {
      $(this).attr("class", "led-off");
    }
  });
});



///////////////////////////////////////////////////////
// $('#btn-b').click(function(){
//   console.log("button clicked look next")
//   if (this === ".led-off.led-drink") {
//     $(this).removeClass("led-off")
//     $(this).addClass("led-on")
//     console.log("click work");
// };
//
// });
/////////////////////////////////////////////////
// $('.btn-ad').click(function(){
//
//   console.log("");
//});
