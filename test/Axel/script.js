$(document).ready(function(){
$('#boisson').click(function(){
    console.log("clicked")
    $('#boisson').removeClass("boisson boisson1 boisson2").addClass("boisson");
    $('#boisson').toggleClass("boisson boisson2");
  });
  // $('#boisson').click(function(){
  //   console.log("clicked reboot");
  //   $(this).removeClass("boisson").addClass("boisson2");
  // });

});
