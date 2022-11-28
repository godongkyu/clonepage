$(function(){
  $(".siteLink").load("svg.html .svg1");
  $(".logo-play").load("svg.html .svg2");

  $(".stop").click(function(){
    $(this).css("display","none");
    $(".start").css("display","block");
  });
  $(".start").click(function(){
    $(this).css("display","none");
    $(".stop").css("display","block");
  });
  
  $(".clickOpen").click(function(){
    if ( $(this).attr("class") === "clickOpen" ) {
      $(this).addClass("on");
    }else {
      $(this).removeClass("on");
    }
  });
});
