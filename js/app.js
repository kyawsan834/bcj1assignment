/** @format */

// console.log("hi");

// jQuery Area
(($) => {
  // console.log("hay");

  // Start preloader

  $(window).on("load", function () {
    $(".preloader").fadeOut(1000);
  });

  // End preloader

  // for burger
  $(".navbuttons").click(function () {
    $(".navbuttons").toggleClass("crossxs");
  });

  // for nav
  $(window).scroll(function () {
    let getscrolltop = $(this).scrollTop();
    // console.log(getscrolltop);

    if (getscrolltop >= 280) {
      $(".navbs").addClass("navbsbgs");
    } else {
      $(".navbs").removeClass("navbsbgs");
    }
  });

  // Start Our Project Section

  $(".projectlists").click(function () {
    // for active
    $(this).addClass("activeitems").siblings().removeClass("activeitems");

    let getattr = $(this).attr("data-filter");
    console.log(getattr);

    // for filters
    if (getattr == "all") {
      $(".filters").show("slide", 350);
    } else {
      $(".filters").hide("slide", 350);
      $(".filters")
        .not("." + getattr)
        .hide("slide", 350);
      $(".filters")
        .filter("." + getattr)
        .show("slide", 350);
    }
  });

  // End Our Project Section

  let date = new Date();
  const getFullYear = date.getFullYear();
  console.log(getFullYear);

  $("#year").text(getFullYear);
})(jQuery);
