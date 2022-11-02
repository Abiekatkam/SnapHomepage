// Dom
const bodyElem = document.querySelector("body");

const modeElem = document.getElementById("Mode");

const logoElem = document.getElementById("logo");
const navlinkElem = document.querySelectorAll(".nav-link");
const register = document.querySelector(".register");
const moreElem = document.getElementById("LearnMore");

function modeSwitch() {
  if (modeElem.value == "DarkMode") {
    logoElem.setAttribute("src", "./images/logo2.svg");
    bodyElem.style.backgroundColor = "#141414";
    bodyElem.style.color = "#fafafa";
    moreElem.classList.add("mutate");
    moreElem.classList.remove("inheritance");

    for (let i = 0; i < navlinkElem.length; i++) {
      navlinkElem[i].style.color = "#fafafa";
    }

    register.style.border = "2px solid var(--white)";
    modeElem.value = "LightMode";
  } else if (modeElem.value == "LightMode") {
    logoElem.setAttribute("src", "./images/logo.svg");
    bodyElem.style.backgroundColor = "#fafafa";
    bodyElem.style.color = "#141414";
    register.style.border = "2px solid var(--gray)";

    for (let i = 0; i < navlinkElem.length; i++) {
      navlinkElem[i].style.color = "#696969";
    }

    moreElem.classList.remove("mutate");
    moreElem.classList.add("inheritance");
    modeElem.value = "DarkMode";
  }
}
