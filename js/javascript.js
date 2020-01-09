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


// Get the button that opens the modal
var btn = document.querySelectorAll("button.modal-button");

// All page modals
var modals = document.querySelectorAll('.modal');

// Get the <span> element that closes the modal
var spans = document.getElementsByClassName("close");

// When the user clicks the button, open the modal
for (var i = 0; i < btn.length; i++) {
    btn[i].onclick = function (e) {
        e.preventDefault();
        modal = document.querySelector(e.target.getAttribute("href"));
        modal.style.display = "block";
    }
}

// When the user clicks on <span> (x), close the modal
for (var i = 0; i < spans.length; i++) {
    spans[i].onclick = function () {
        for (var index in modals) {
            if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";
        }
    }
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target.classList.contains('modal')) {
        for (var index in modals) {
            if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";
        }
    }
}