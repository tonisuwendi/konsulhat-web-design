$(document).ready(function() {
  $(document).scroll(function() {
    let scroll = $(window).scrollTop();

    if (scroll > 220) {
      $("nav").css("top", "0");
    } else {
      $("nav").css("top", "-100px");
    }
  });
});
