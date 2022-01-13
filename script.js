// scrol top start
// Show or hide the sticky footer button
$(window).scroll(function () {
  if ($(this).scrollTop() > 500) {
    $(".go-top").fadeIn(200);
  } else {
    $(".go-top").fadeOut(200);
  }
});

// Animate the scroll to top
$(".go-top").click(function (event) {
  event.preventDefault();

  $("html, body").animate({ scrollTop: 0 }, 300);
});

// scroll top end
