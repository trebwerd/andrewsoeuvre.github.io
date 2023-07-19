//hamburger menu
const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector(".nav-list");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navList.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navList.classList.remove("active");
}

// hide nav bar
var lastScrollTop = 0;
const navBar = document.querySelector(".navbar");
window.addEventListener('scroll', navHide);

function navHide() {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if(scrollTop > lastScrollTop){
    navBar.style.transform='translateY(-100%)';
    hamburger.classList.remove("active");
    navList.classList.remove("active");
    }
    else{
    navBar.style.transform='translateY(0%)';
    }
    lastScrollTop = scrollTop;
}

// fade out pages
$(document).ready(function(){
    $('.nav-link, .nav-logo-text').click(function(e){
        redirect = $(this).attr('href');
        e.preventDefault();
        $('body').fadeOut(700, function(){
            document.location.href = redirect
        });
    });
});