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

$(document).ready(function(){
    $("button").click(function(){
        $("#div1").fadeIn();
        $("#div2").fadeIn("slow");
        $("#div3").fadeIn(3000);
    });
});

$(document).ready(function(){
    $("button").click(function(){
        $("#div1").fadeOut();
        $("#div2").fadeOut("slow");
        $("#div3").fadeOut(3000);
    });
});

$(document).ready(function(){
    $("#flip").click(function(){
        $("#recipe").slideDown("slow");
    });
});

$(document).ready(function(){
    $("#flip").click(function(){
        $("#panel").slideToggle("slow");
    });
});
