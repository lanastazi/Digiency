
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

// dark theme 

const themeSwitcher = document.getElementById('theme-switcher');

// nav
const headerNav = document.querySelector('.main-color-bg');
    themeSwitcher.addEventListener('click', () => 
        headerNav.classList.toggle('dark'));

// header
const header = document.querySelector('.header');
    themeSwitcher.addEventListener('click', () => 
        header.classList.toggle('dark'));

// about
const aboutSection = document.querySelector('.about');
    themeSwitcher.addEventListener('click', () => 
        aboutSection.classList.toggle('dark'));

// experience
const experienceSection = document.querySelector('.experience');
    themeSwitcher.addEventListener('click', () => 
        experienceSection.classList.toggle('dark'));

// team
const teamSection = document.querySelector('.team');
    themeSwitcher.addEventListener('click', () => 
        teamSection.classList.toggle('dark'));

// work
const workSection = document.querySelector('.work');
    themeSwitcher.addEventListener('click', () => 
        workSection.classList.toggle('dark'));

// feedback
const feedbackSection = document.querySelector('.feedback');
    themeSwitcher.addEventListener('click', () => 
        feedbackSection.classList.toggle('dark'));

// blogs
const blogsSection = document.querySelector('.blogs');
    themeSwitcher.addEventListener('click', () => 
        blogsSection.classList.toggle('dark'));

// contact
const contactSection = document.querySelector('.contact');
    themeSwitcher.addEventListener('click', () => 
        contactSection.classList.toggle('dark'));
