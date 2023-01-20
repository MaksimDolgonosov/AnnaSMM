"use strict";
let burger = document.querySelector(".header__hamburger");
let burgerNav = document.querySelector(".header__items");

burger.addEventListener("click",()=>{
if(burgerNav.classList.contains("active_nav")) {
    burgerNav.classList.remove("active_nav");
} else {
    burgerNav.classList.add("active_nav");
}
});