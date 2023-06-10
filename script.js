var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = x.length }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
}

let navLinks = document.querySelector(".menu");
let menuOpenBtn = document.querySelector(".menu-bar");
let closeBtn = document.querySelector(".close-bar")
menuOpenBtn.onclick = function () {
    navLinks.classList.add("showInput");
}

closeBtn.onclick = function () {
    closeBtn.classList.remove("showInput");
}
