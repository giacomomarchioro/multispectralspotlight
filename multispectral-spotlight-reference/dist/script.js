$("img").on("mousemove", function(e){
  var diameter = 100;
  // this is needed for the correct positioning
  var xp = e.pageX - diameter*0.8535; 
  var yp = e.pageY - diameter*0.8535;
  // we crop the image
  $('.spotlight').css({
       left:  xp,
       top:   yp,
       width: diameter+'px',
       height: diameter+'px',
    });
  // then we position it back 
  $('.spotlight img').css({
       left:  -xp,
       top:   -yp,
    });
});