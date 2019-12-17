// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.querySelector(".header").style.paddingTop = ".2rem";
        document.querySelector(".header").style.paddingBottom = ".2rem";
        document.querySelector(".logo-header").style.width = "50px";
        document.querySelector(".logo-header").style.background = "none";
        document.querySelector(".name-logo").style.fontSize = "1.4rem";
    } else {
        document.querySelector(".header").style.paddingTop = "1rem";
        document.querySelector(".header").style.paddingBottom = "1rem";
        document.querySelector(".logo-header").style.background = "white";
        document.querySelector(".logo-header").style.width = "60px";
        document.querySelector(".name-logo").style.fontSize = "2rem";
    }
} 