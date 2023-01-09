// Drop up Menu
let subMenu = document.getElementById("subMenu");
function toggleMenu() {
    subMenu.classList.toggle("open-menu");
}

// Dark Mode
var icon = document.getElementById("click");
icon.onclick = function () {
    document.body.classList.toggle("dark-theme");
}

// Story Scroll
let currentScrollPosition = 0;
let scrollAmount = 320;

const sCont = document.querySelector(".story-container");
const hScroll = document.querySelector(".horizontal-scroll");
const btnScrollLeft = document.querySelector("#scroll-left");
const btnScrollRight = document.querySelector("#scroll-right");

btnScrollLeft.style.opacity = "0";

let maxScroll = -sCont.offsetWidth + hScroll.offsetWidth;

function scrollHorizontally(val) {
    currentScrollPosition += (val * scrollAmount);

    if (currentScrollPosition >= 0) {
        currentScrollPosition = 0;
        btnScrollLeft.style.opacity = "0";
    }
    else {
        btnScrollLeft.style.opacity = "1";
    }
    if (currentScrollPosition <= maxScroll) {
        currentScrollPosition = maxScroll;
        btnScrollRight.style.opacity = "0";
    }
    else {
        btnScrollLeft.style.opacity = "1";
    }
    sCont.style.left = currentScrollPosition + "px";
}