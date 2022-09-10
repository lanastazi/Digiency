
// burger
const burger = document.querySelector('.burger');
const navMenu = document.querySelector('.nav__list');
const nav = document.querySelector('.header__nav');
const logo = document.querySelector('.header__logo');
const themeToggle = document.querySelector('.header__theme-toggle-link');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    nav.classList.toggle('active');
    navMenu.classList.toggle('active');
    logo.classList.toggle('active');
    themeToggle.classList.toggle('active');
})