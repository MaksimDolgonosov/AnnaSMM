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
        console.log(e.target.parentNode.parentNode);


        if (e.target.parentNode.parentNode.classList.contains("services__wrapper__item")) {
            e.target.parentNode.parentNode.classList.add("active_accordion");
        }





        // if (e.target.parentNode.classList.contains("services__wrapper__item-header") || e.target.parentNode.parentNode.classList.contains("services__wrapper__item-header") || e.target.classList.contains("services__wrapper__item-header") || e.target.parentNode.parentNode.classList.contains("Iconly/Bold/Arrow---Down-Circle")) {
        //     console.log(e.target.parentNode.parentNode.parentNode.parentNode.parentNode.nextElementSibling);
        //     e.target.nextElementSibling.style.display = "block";
        //     e.target.nextElementSibling.style.visibility = "visible";
        // }
        // console.log(e.target);
        // e.classList.add("active_accordion");

    });
});
