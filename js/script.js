const hamburguer = document.querySelector('.hamburguer');
const navMenu = document.querySelector('.nav-menu');

hamburguer.addEventListener('click', () => {
    hamburguer.classList.toggle('active');
    navMenu.classList.toggle('active');
});

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener(
    'click', () => {
        hamburguer.classList.remove('active');
        navMenu.classList.remove('active');
    }
))


const nav = document.querySelector('.navbar')
window.addEventListener('scroll', fixNav)

function fixNav() {
    if (window.scrollY > nav.offsetHeight + 150) {
        nav.classList.add('active')
    } else {
        nav.classList.remove('active')
    }
}


//get the position y of the element in the page

// let getPosition = (element) => {
//     let y = 0;
//     while (element) {
//         y += element.offsetTop;
//         element = element.offsetParent;
//     }
//     return y;
// }

// let change_color_bar = getPosition(document.querySelector('#clientes'))


// let hamburguer_color_bar = document.querySelector('.hamburguer');
// let navMenu_color_bar = document.querySelector('.nav-menu');

// let nav2 = document.querySelector('.navbar')
// window.addEventListener('scroll', fixNav2)
// function fixNav2() {
//     if (window.scrollY > nav.offsetHeight + change_color_bar - 150) {
//         nav2.classList.add('active2')
//         hamburguer_color_bar.classList.add('active_white')
//         navMenu_color_bar.classList.add('active_white')
//     } else {
//         nav2.classList.remove('active2')
//         hamburguer_color_bar.classList.remove('active_white')
//         navMenu_color_bar.classList.remove('active_white')
//     }
// }



const nav_menu = document.querySelector('.nav-menu')
window.addEventListener('scroll', fixMenu)

function fixMenu() {
    if (window.scrollY > nav.offsetHeight + 150) {
        nav_menu.classList.add('active2')
    } else {
        nav_menu.classList.remove('active2')
    }
}


// Smooth scrolling 

const links = document.querySelectorAll(".nav-menu li a");
const serv = document.getElementById('servicios-banner');
const contact = document.getElementById('contact-scroll');

for (const link of links) {
    link.addEventListener("click", clickHandler);
}

serv.addEventListener("click", clickHandler);
contact.addEventListener("click", clickHandler);

function clickHandler(e) {
    e.preventDefault();
    const href = this.getAttribute("href");
    const offsetTop = document.querySelector(href).offsetTop;

    scroll({
        top: offsetTop,
        behavior: "smooth"
    });
}


// carousel


// let images = [...document.querySelectorAll('.carrousel-img')];
// images.forEach((image, idx) => {
//     image.style.backgroundImage = `url(./js/logo/logo_${idx + 1}.jpg)`;
// });



// const carrusel = document.querySelector(".carrusel-items");



// let maxScrollLeft = carrusel.scrollWidth - carrusel.clientWidth;


// let intervalo = null;
// let step = 1;


// const start = () => {

//     intervalo = setInterval(function () {
//         carrusel.scrollLeft = carrusel.scrollLeft + step;

//         if (carrusel.scrollLeft === maxScrollLeft) {

//             step = step * -1;
//         } else if (carrusel.scrollLeft === 0) {

//             step = step * -1;

//         }
//     }, 10);
// };





// const stop = () => {
//     clearInterval(intervalo);
// };

// carrusel.addEventListener("mouseover", () => {
//     stop();
// });

// carrusel.addEventListener("mouseout", () => {
//     start();
// });

// start();


