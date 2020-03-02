const navbar = document.querySelector("nav");

window.onscroll = function() {
  const scroll = document.documentElement.scrollTop;

  if (scroll > 500) {
    navbar.style.top = "0";
  } else {
    navbar.style.top = "-100px";
  }
};
