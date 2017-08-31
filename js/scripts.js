$(document).ready(function() {
  $("p").click(function() {
    $(".image-showing").toggle();
    $(".image-hidden").toggle();
  });
});

$(document).ready(function() {
  $("p").click(function(){
    $(".2image-showing").fadeIn();
    $(".2image-hidden").faceOut();
  });
});
