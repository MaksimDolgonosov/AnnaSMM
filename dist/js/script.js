"use strict";

//burger-menu
let burger = document.querySelector(".header__hamburger");
let burgerNav = document.querySelector(".header__items");

burger.addEventListener("click", () => {
    if (burgerNav.classList.contains("active_nav")) {
        burgerNav.classList.remove("active_nav");
        burger.classList.remove("active_burger");
    } else {
        burgerNav.classList.add("active_nav");
        burger.classList.add("active_burger");
    }
});

//accordion
let servicesItems = document.querySelectorAll(".services__wrapper__item");

servicesItems.forEach(item => {
    item.addEventListener("click", e => {
        if (e.target.parentNode.classList.contains("services__wrapper__item-header-active")) {
            e.target.parentNode.classList.remove("services__wrapper__item-header-active");
            e.target.parentNode.classList.add("services__wrapper__item-header");
            e.target.parentNode.nextElementSibling.classList.remove("services__wrapper__item-accordion-active");
            e.target.parentNode.nextElementSibling.classList.add("services__wrapper__item-accordion");
        } else {
            e.target.parentNode.classList.remove("services__wrapper__item-header");
            e.target.parentNode.classList.add("services__wrapper__item-header-active");
            e.target.parentNode.nextElementSibling.classList.remove("services__wrapper__item-accordion");
            e.target.parentNode.nextElementSibling.classList.add("services__wrapper__item-accordion-active");
        }
    });
});
