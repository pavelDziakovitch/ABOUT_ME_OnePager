window.onscroll = function() {
  if (scrollY < 250) {
    document.getElementById("header").style.top="-140px";
  } else {
    document.getElementById("header").style.top="0px";
  }
}