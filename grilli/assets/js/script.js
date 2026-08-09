'use strict';

const preloader = document.querySelector('[data-preaload]');
window.addEventListener('load', () => {
  preloader?.classList.add('loaded');
  document.body.classList.add('loaded');
});

const navbar = document.querySelector('[data-navbar]');
const overlay = document.querySelector('[data-overlay]');
const navTogglers = document.querySelectorAll('[data-nav-toggler]');
const navLinks = document.querySelectorAll('.navbar-link');

const closeNavigation = () => {
  navbar?.classList.remove('active');
  overlay?.classList.remove('active');
  document.body.classList.remove('nav-active');
};

navTogglers.forEach((button) => button.addEventListener('click', () => {
  navbar?.classList.toggle('active');
  overlay?.classList.toggle('active');
  document.body.classList.toggle('nav-active');
}));
navLinks.forEach((link) => link.addEventListener('click', closeNavigation));

const header = document.querySelector('[data-header]');
const backTopButton = document.querySelector('[data-back-top-btn]');
const updateScrollUI = () => {
  const scrolled = window.scrollY > 0;
  header?.classList.toggle('active', scrolled);
  backTopButton?.classList.toggle('active', scrolled);
};
window.addEventListener('scroll', updateScrollUI, { passive: true });
updateScrollUI();

const observedSections = [...document.querySelectorAll('main section[id]')];
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    navLinks.forEach((link) => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`));
  });
}, { rootMargin: '-35% 0px -55%', threshold: 0 });
observedSections.forEach((section) => sectionObserver.observe(section));

const filterButtons = document.querySelectorAll('[data-menu-filter]');
const menuItems = document.querySelectorAll('[data-category]');
filterButtons.forEach((button) => button.addEventListener('click', () => {
  filterButtons.forEach((item) => item.classList.remove('active'));
  button.classList.add('active');
  const filter = button.dataset.menuFilter;
  menuItems.forEach((item) => item.classList.toggle('hidden', filter !== 'all' && item.dataset.category !== filter));
}));

const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();
