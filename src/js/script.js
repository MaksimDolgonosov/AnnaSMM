"use strict";

//burger-menu
let burger = document.querySelector(".header__hamburger");
let burgerNav = document.querySelector(".header__items");
const menuItems = document.querySelectorAll(".header__items-item a");
burger.addEventListener("click", () => {
    if (burgerNav.classList.contains("active_nav")) {
        burgerNav.classList.remove("active_nav");
        burger.classList.remove("active_burger");
    } else {
        burgerNav.classList.add("active_nav");
        burger.classList.add("active_burger");
    }
});
menuItems.forEach(item => {
    item.addEventListener("click", () => {
        if (document.querySelector(".header__items").classList.contains("active_nav")) {
            burgerNav.classList.remove("active_nav");
            burger.classList.remove("active_burger");

        }
    });
});

//accordion
const servicesItems = document.querySelectorAll(".services__wrapper__item");

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






