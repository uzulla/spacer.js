/*
 Spacer.js - client side spacer.gif
 @uzulla

 require jQuery
*/
function setSpacer(color){
  var canvas = $('<canvas>')[0];

  $(canvas).attr("width", 1);
  $(canvas).attr("height", 1);
  var ctx = canvas.getContext("2d");
  if(color){
    ctx.fillStyle=color;
    ctx.fillRect(0, 0, 1, 1);
  }else{
    ctx.fillRect(0, 0, 0, 0);
  }
  var dataURL = canvas.toDataURL("image/png");
	
  $('img').filter('[src=spacer.js]').attr('src',dataURL);
}
