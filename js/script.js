$(document).ready(function () {
  //Header style app
  $("header li a").on("click", function () {
    $(this)
      .addClass("active")
      .parent()
      .siblings()
      .find("a")
      .removeClass("active"); //chaining
  });
  //window app
  var homeOffset = $(".home").offset().top;
  console.log(homeOffset);
  $(window).scroll(function () {
    var windowScroll = $(this).scrollTop();
    if (windowScroll > 200) {
      $("header").addClass("changeHeader");
    } else {
      $("header").removeClass("changeHeader");
    }
  });
  //Dynamic Taps
  $("header a").click(function () {
    var headerHeight = $("header").height();
    var myId = $(this).attr("id");
    $("body,html").animate({
      scrollTop: $("." + myId).offset().top - headerHeight,
    });
  });

  //Filter image
  $(".tabs button").click(function () {
    var myClass = $(this).attr("class");
    if (myClass == "all") {
      $(".images img").fadeIn();
    } else {
      $(".images img").hide();
      $(".images ." + myClass).fadeIn();
    }
  });
  //Scroll to top
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $(".scrollTop").css("display", "block");
    } else {
      $(".scrollTop").css("display", "none");
    }
  });
  $(".scrollTop").click(function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      800
    );
  });
  //countDown characters of textarea app
  $("textarea").keyup(function (e) {
    if (e.target.value.length >= 100) { 
      e.target.value = e.target.value.substr(0, 100);
    }
  });
}); //end jQuery
