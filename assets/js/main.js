$(document).ready(function () {

  $("#getStart").click(function () {
    $(".loadPage").animate({
      top: '-2000px',
    }, 700);
    $("body").css("overflow-y", "scroll");
    
  });


  $(".changeBgB").click(function () {
    $("#headerChange").toggleClass("headerChange");
  });

  $(".buttonOff").click(function () {
    $(".changeBgB").toggleClass("buttonOn");
  });

  $(".nav-link").on("mouseenter", function () {
    $(this).after("<hr class='line' />");
    $(".line").animate({ width: "100%" });
  });
  $(".nav-link").mouseleave(function () {
    $(".line").animate({ width: "0px" });
    $(".line").remove();
  });

  $(".dropdown-item").on("mouseenter", function () {
    $(this).after("<hr class='line' />");
    $(".line").animate({ width: "100%" });
  });
  $(".dropdown-item").mouseleave(function () {
    $(".line").animate({ width: "0px" });
    $(".line").remove();
  });

  $(".goDwonButton").mouseenter(function () {
    $(".goDwonButton").animate(
      {
        bottom: "50px",
      },
      1000
    );
    $(".goDwonButton").animate(
      {
        bottom: "25px",
      },
      1000
    );
    $(".goDwonButton").animate(
      {
        bottom: "50px",
      },
      1000
    );
    $(".goDwonButton").animate(
      {
        bottom: "25px",
      },
      1000
    );
  });

  /// arttırma azaltma işlemi ///
  function isNegative() {
    var $rooms = $("#noOfRoom");
    var c = $rooms.val();

    if (c >= 0) {
      //b--;
      //$rooms.val(b);
    } else {
      $("#subs").prop("disabled", true);
      $rooms.val(0);
    }
  }

  $("#adds").click(function add() {
    var $rooms = $("#noOfRoom");
    var a = $rooms.val();

    a++;
    $("#subs").prop("disabled", !a);
    $rooms.val(a);

    $("#noOfRoom").trigger(isNegative());
  });

  $("#subs").prop("disabled", !$("#noOfRoom").val());

  $("#subs").click(function subst() {
    var $rooms = $("#noOfRoom");
    var b = $rooms.val();
    if (b >= 1) {
      b--;
      $rooms.val(b);
    } else {
      $("#subs").prop("disabled", true);
    }
  });

  /// arttırma azaltma işlemi ///

  $(".owl-carouselOne").owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    center: true,
    slideTransition: "linear",
    autoplaySpeed: 6000,
    smartSpeed: 6000,
    autoplayHoverPause: true,
    rtl: false,
    responsive: {
      0: {
        items: 3,
      },
      600: {
        items: 7,
      },
      1000: {
        items: 9,
      },
    },
  });

  $(".owl-carouselTwo").owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    center: true,
    slideTransition: "linear",
    autoplaySpeed: 6000,
    smartSpeed: 6000,
    autoplayHoverPause: true,
    rtl: true,
    responsive: {
      0: {
        items: 3,
      },
      600: {
        items: 7,
      },
      1000: {
        items: 9,
      },
    },
  });

  $(".clickme").each(function () {
    $(this)
      .show(0)
      .on("click", function (e) {
        e.preventDefault();
        $(this).next(".box").slideToggle("slow");
      });
  });

  $(".iconcardDiv").mouseenter(function () {
    $(this).animate({ left: "-240px" }, 300);
  });

  $(".iconCard").mouseleave(function () {
    $(".iconcardDiv").animate({ left: "0px" }, 300);
  });

  AOS.init({
    duration: 2000,
  });
  
  $('.scoailmedia').mouseenter(function() {
    $(this).animate(
      { deg: 360 },
      {
        duration: 1200,
        step: function(now) {
          $(this).css({ transform: 'rotate(' + now + 'deg)' });
        }
      }
    );
  });

  $(".imgTeamArea").on("mouseenter", function () {
    $(this).animate({
      left: '10px',
    }, 50);
    $(this).animate({
      left: '-10px',
    }, 50);
    $(this).animate({
      left: '10px',
    }, 50);
    $(this).animate({
      left: '-10px',
    }, 50);
    $(this).animate({
      left: '10px',
    }, 50);
    $(this).animate({
      left: '-10px',
    }, 50);
    $(this).animate({
      left: '10px',
    }, 50);
    $(this).animate({
      left: '-10px',
    }, 50);
  });

  $(".one").on("mouseenter", function () {
    $(".teamNameCreative").fadeIn(600);
    $('.buke').animate({
      top: "50px",
    }, 600);
  });

  $(".one").on("mouseleave", function () {
    $(".teamNameCreative").fadeOut(600);
    $('.buke').animate({
      top: "112px",
    }, 300);

  });

  $(".two").on("mouseenter", function () {
    $(".teamNameCreativeTwo").fadeIn(600);
    $('.kurb').animate({
      top: "-50px",
    }, 600);
  });

  $(".two").on("mouseleave", function () {
    $(".teamNameCreativeTwo").fadeOut(600);
    $('.kurb').animate({
      top: "25px",
    }, 600);
  });

  $(".three").on("mouseenter", function () {
    $(".teamNameCreativeThree").fadeIn(600);
    $('.akk').animate({
      top: "-30px",
    }, 600);
  });

  $(".three").on("mouseleave", function () {
    $(".teamNameCreativeThree").fadeOut(600);
    $('.akk').animate({
      top: "10px",
    }, 600);
  });

  $(".four").on("mouseenter", function () {
    $(".teamNameCreativeFour").fadeIn(600);
    $('.tar').animate({
      top: "-40px",
    }, 600);
  });

  $(".four").on("mouseleave", function () {
    $(".teamNameCreativeFour").fadeOut(600);
    $('.tar').animate({
      top: "14px",
    }, 600);
  });

  $(".fife").on("mouseenter", function () {
    $(".teamNameCreativeFive").fadeIn(600);
    $('.sol').animate({
      top: "-20px",
    }, 600);
  });

  $(".fife").on("mouseleave", function () {
    $(".teamNameCreativeFive").fadeOut(600);
    $('.sol').animate({
      top: "14px",
    }, 600);
  });

  $(".six").on("mouseenter", function () {
    $(".teamNameCreativeSix").fadeIn(600);
    $('.sal').animate({
      top: "-20px",
    }, 600);
  });

  $(".six").on("mouseleave", function () {
    $(".teamNameCreativeSix").fadeOut(600);
    $('.sal').animate({
      top: "14px",
    }, 600);
  });


  $(".seven").on("mouseenter", function () {
    $(".teamNameCreativeSeven").fadeIn(600);
    $('.ciy').animate({
      top: "-66px",
    }, 600);
  });

  $(".seven").on("mouseleave", function () {
    $(".teamNameCreativeSeven").fadeOut(600);
    $('.ciy').animate({
      top: "0px",
    }, 600);
  });

  $(".roadMapButton").click(function () {
    $('.roadMapImage').animate({
      height: "5600px",
    }, 600);
    $(".roadMapImage").css({ 'filter': 'blur(0px)' });
    $(".roadMapImage").css({ 'background-size': '100% 100%' });
    $(".roadMapImage").css({ 'background-position': '0px 0px' });
  });

});

