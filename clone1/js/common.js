$(function(){
  $(window).scroll(function(){
    let wHeight = $(this).height();
    let thisScrollTop = $(this).scrollTop();
    console.log(thisScrollTop);
    let banner = $(".head-inside").height();
    let navBar = $(".head-inside");
    $(".head-inside").each(function(){
      let thisOffset = $(this).offset();
      console.log(thisOffset);
    if( thisScrollTop > banner){
      $(".head-inside").css("color","#8c5e37").css("transition","0.4s");
      $(".head-inside-text").css("background-color","white").css("transition","0.4s");
      $(".change").attr("src","./img/logo1.png").css("transition","1s");
      $(".head-text-btn").css("border","1px solid #8c5e37").css("transition","0.1s");
      navBar.addClass("fixed").css("transition","0.4s");
    }else{
      navBar.removeClass("fixed");
      $(".head-inside").css("color","#ffffff");
      $(".head-inside-text").css("background-color","#4c3b2a");
      $(".change").attr("src","./img/logo.png");
      $(".head-text-btn").css("border","1px solid white");
    }
    if ( thisScrollTop > 350 ) {
     $(".section2").css("opacity","1").css("transition","2.5s");
    }else{
     $(".section2").css("opacity","0");
    }

  });
 });


});
