const footerName = document.querySelector(".footer-scroll");

footerName.addEventListener("click", scrollUp);

function scrollUp() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  
}
