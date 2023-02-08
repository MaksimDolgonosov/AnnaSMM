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


const swiper = new Swiper('.cases__slider', {
    // // Optional parameters
    // loop: true,
    slidesPerView: "auto",
    centeredSlides: true,
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

const swiperDiploms = new Swiper('.diploms__slider', {
    // // Optional parameters
    loop: true,
    centeredSlides: true,
    slidesPerView: 1,
    navigation: {
        nextEl: '.diploms__nav-right',
        prevEl: '.diploms__nav-left',
    },
    pagination: {
        el: ".diploms__pagination",
        clickable: true,
    }
    // Navigation arrows
    // autoplay: {
    //     delay: 5000,
    // },

});


// отправка формы
const forms = document.querySelectorAll("form");

forms.forEach(form => postData(form));

function postData(form) {
    form.addEventListener("submit", e => {
        e.preventDefault();
        const request = new XMLHttpRequest();
        request.open("POST", "mailer/smart.php");
        const formData = new FormData(form);
        request.send(formData);
        request.addEventListener("load", () => {
            // console.log(request.status);
            // console.log(formData);
            if (request.status == 200) {
                form.reset();
                document.querySelector('.overlay').style.visibility = "visible";
                document.querySelector('.modal_thanks').style.visibility = "visible";
                document.querySelector('.overlay').style.opacity = "1";
                document.querySelector('.modal_thanks').style.opacity = "1";
                document.body.style.overflow = "none";
                setTimeout(() => {
                    document.querySelector('.overlay').style.visibility = "hidden";
                    document.querySelector('.modal_thanks').style.visibility = "hidden";
                    document.querySelector('.overlay').style.opacity = "0";
                    document.querySelector('.modal_thanks').style.opacity = "0";
                    document.body.style.overflow = "";
                }, 3000);

            } else {

                document.querySelector('.overlay').style.visibility = "visible";
                document.querySelector('.modal_error').style.visibility = "visible";
                document.querySelector('.overlay').style.opacity = "1";
                document.querySelector('.modal_error').style.opacity = "1";
                document.body.style.overflow = "none";
                setTimeout(() => {
                    document.querySelector('.overlay').style.visibility = "hidden";
                    document.querySelector('.modal_error').style.visibility = "hidden";
                    document.querySelector('.overlay').style.opacity = "0";
                    document.querySelector('.modal_error').style.opacity = "0";
                    document.body.style.overflow = "";
                }, 3000);
            }

        });
    });
}


//открытие картинок

const cases = document.querySelector(".cases__slider");
const diploms = document.querySelector(".diploms__slider");
addBigImage(cases, "cases__slider__slide");
addBigImage(diploms, "diploms__slider__slide");

function addBigImage(classItem, imageItem) {
    const imgDiv = document.createElement("div");
    const bigImg = document.createElement("img");
    const close = document.createElement("div");

    close.textContent = `×`;
    close.style.cssText = `
position: absolute;
top: -15px;
right: -15px;
font-size: 5rem;
width: 5rem;
height: 5rem;
line-height: 5rem;
text-align: center;
background: transparent;
color: #ffffff;
border: none;
cursor: pointer`;

    classItem.appendChild(imgDiv);
    imgDiv.classList.add("popup");
    close.classList.add("popup__close");
    imgDiv.style.justifyContent = "center";
    imgDiv.style.alignItems = "center";
    imgDiv.style.display = "none";
    imgDiv.appendChild(bigImg);
    imgDiv.appendChild(close);
    classItem.addEventListener("click", e => {
        e.preventDefault();

        if (e.target && e.target.parentNode.parentNode.classList.contains(imageItem)) {
            imgDiv.style.display = "flex";
            document.body.style.overflow = "hidden";
            console.log(e.target);
            const srcImage = e.target.getAttribute('src');
            bigImg.setAttribute("src", `../${srcImage}`);
            bigImg.style.zIndex = "99";
            if (window.innerWidth < 605 && imageItem === "diploms__slider__slide") {
                bigImg.style.width = "90vw";
                // bigImg.style.height = "80vh";
            } else {
                bigImg.style.height = "72vh";
            }

            // bigImg.style.width = "90vw";

            document.querySelector(".header").style.display = "none";
            burgerNav.style.display = "none";

        }
        if (e.target && e.target.classList.contains("popup") || e.target && e.target.classList.contains("popup__close")) {
            imgDiv.style.display = "none";
            document.body.style.overflow = "";
            burgerNav.style.display = "flex";
            document.querySelector(".header").style.display = "block";
        }
    });
}




