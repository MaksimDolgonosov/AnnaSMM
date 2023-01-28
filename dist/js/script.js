"use strict";
new WOW().init();
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

// //cases

// const leftBtn = document.querySelector(".cases__nav-left");
// const rightBtn = document.querySelector(".cases__nav-right");
// const slidesWrapper = document.querySelector(".cases__slider__slides");
// const slides = document.querySelectorAll(".cases__slider__slide");
// let offset = 0;
// rightBtn.addEventListener("click", () => {
//     if (offset == 274 * (slides.length - 1)) {
//         offset = 0;
//     } else {
//         offset += 274;
//     }
//     slidesWrapper.style.transform = `translateX(-${offset}px)`;
// });

// leftBtn.addEventListener("click", () => {

//     if (offset == 0) {
//         offset = 274 * (slides.length - 1);
//     } else {
//         offset -= 274;
//     }
//     slidesWrapper.style.transform = `translateX(-${offset}px)`;
// });


// slidesWrapper.addEventListener("touchstart", function (e) { TouchStart(e); });
// slidesWrapper.addEventListener("touchend", function (e) { TouchEnd(e); });

// let touchPositon = 0;

// function TouchStart(e) {
//     touchPositon = e.changedTouches[0].clientX;
// }
// function TouchEnd(e) {
//     if (touchPositon - e.changedTouches[0].clientX > 0) {
//         rightBtn.click();
//         touchPositon = 0;
//     }
// }


const swiper = new Swiper('.swiper', {
    // // Optional parameters
    // loop: true,
    slidesPerView: "auto",
    // Navigation arrows
    navigation: {
        nextEl: '.cases__nav-right',
        prevEl: '.cases__nav-left',
    },

});


// accordion stages

const headers = document.querySelectorAll(".stages__wrapper__item-header");

headers.forEach(header => {
    header.addEventListener("click", e => {
        e.target.nextElementSibling.classList.toggle("active-stage");
        e.target.parentNode.classList.toggle("active-item");
        console.log(e.target.parentNode);
    });
});