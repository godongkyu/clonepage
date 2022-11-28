'use strict';
$(function() {
  $(window).scroll(function() {
    // console.log($(this).scrollTop());
    // console.log($("#section2 .section2-inner-box1").offset());
    let scTop = $(this).scrollTop();
    let navBar = $("header");
    let width = $(window).width()

    function marginleft(el) {
      $(el).css("margin-left", "0").css("opacity", "1")
    }
    function marginRight(el) {
      $(el).css("margin-right", "0").css("opacity", "1")
    }
    function borderLeft(el) {
      $(el).css("margin-left", "0").css("opacity", "1").css("border-radius", "0")
    }
    function borderRight(el) {
      $(el).css("margin-right", "0").css("opacity", "1").css("border-radius", "0")
    }
    function bottom(el) {
      $(el).css("bottom", "0").css("opacity", "1")
    }
    if (scTop >= 0) {
      $("#section1 .section1-text-inner").css("opacity", "1").css("margin-bottom", "0")
    }
      if (scTop > 900) {
        navBar.addClass("on");
        navBar.addClass("over");
      } else {
        navBar.removeClass("on");
        navBar.removeClass("over");
      }
    if (width > 1600) {
      if (scTop > 500) {
        marginleft("#section2 .section2-inner-box1");
      }
      if (scTop > 1500) {
        marginRight("#section2 .section2-inner-box2");
      }
      if (scTop > 2500) {
        marginleft("#section2 .section2-inner-box3");
      }
      if (scTop > 3500) {
        marginRight("#section2 .section2-inner-box4");
      }
      if (scTop > 7100) {
        bottom("#section4 .section4-inner2-wrap-text")
      }
      if (scTop > 7500) {
        borderLeft("#section4 .section4-inner2-wrap-img-left1 > a div")
      }
      if (scTop > 8000) {
        borderRight("#section4 .section4-inner2-wrap-img-right1 > a")
      }
      if (scTop > 8200) {
        borderLeft("#section4 .section4-inner2-wrap-img-left2 > a div")
      }
      if (scTop > 8500) {
        borderRight("#section4 .section4-inner2-wrap-img-right2 > a")
      }
      if (scTop > 9400) {
        bottom("#section5 .section5-inner-text")
        $("#section5 .section5-inner-bg").css("transform", "scale(1)")
      }
    } else if (width < 1600) {
      if (scTop < 4000) {
        $("#header").removeClass("none")
      }
      if (scTop > 4000) {
        $("#header").addClass("none")
      }
      if (scTop > 400) {
        marginleft("#section2 .section2-inner-box1");
      }
      if (scTop > 1200) {
        marginRight("#section2 .section2-inner-box2");
      }
      if (scTop > 2200) {
        marginleft("#section2 .section2-inner-box3");
      }
      if (scTop > 2800) {
        marginRight("#section2 .section2-inner-box4");
      }
      if (scTop > 6700) {
        bottom("#section4 .section4-inner2-wrap-text")
      }
      if (scTop > 7100) {
        borderLeft("#section4 .section4-inner2-wrap-img-left1 > a div")
      }
      if (scTop > 8600) {
        borderRight("#section4 .section4-inner2-wrap-img-right1 > a")
      }
      if (scTop > 7700) {
        borderLeft("#section4 .section4-inner2-wrap-img-left2 > a div")
      }
      if (scTop > 9400) {
        borderRight("#section4 .section4-inner2-wrap-img-right2 > a")
      }
      if (scTop > 10000) {
        bottom("#section5 .section5-inner-text")
        $("#section5 .section5-inner-bg").css("transform", "scale(1)")
      }
    }
  });

  function addOn(el) {
    $(el).addClass("on")
  }

  function removeOn(el) {
    $(el).removeClass("on")
  }

  $("#header").mouseenter(function() {
    let width = $(window).innerWidth()
    console.log(width < 1024);
    if ( width > 1024 ) {
      addOn(this);
      addOn("#header .sub-gnb-box");
      addOn("#header > .gnb .sub-gnb");
      addOn("#header > .gnb .sub-gnb a");
    }
  })
  $("#header").mouseleave(function() {
    removeOn("#header .sub-gnb-box");
    removeOn("#header > .gnb .sub-gnb");
    removeOn("#header > .gnb .sub-gnb a");
    if ($(this).attr("class") == "on" && $(this).attr("class") != "over") {
      removeOn(this);
    }
  })

  $("#section4 .section4-inner-top ul li:first-child span").mouseenter(function() {
    $("#section4 .section4-inner-shade img").css("opacity", "1")
    $("#section4 .section4-inner-roofniture img").css("opacity", "0")
  })
  $("#section4 .section4-inner-top ul li:last-child span").mouseenter(function() {
    $("#section4 .section4-inner-shade img").css("opacity", "0")
    $("#section4 .section4-inner-roofniture img").css("opacity", "1")
  })
  
});
