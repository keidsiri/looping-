$(document).ready(function(){
  const iceCream = ["Strawberry", "Vanilla", "Chocolate", "Mint-Chip"]
  iceCream.forEach(function(flavor) {
    $("#flavor1").text(iceCream[0] + " flavor! ");
    $("#flavor2").text(iceCream[1] + " flavor! ");
    $("#flavor3").text(iceCream[2] + " flavor! ");
    $("#flavor4").text(iceCream[3] + " flavor! ");
    $("#allflavors").append(flavor + " ");
  });
});  