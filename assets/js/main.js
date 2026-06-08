const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show-menu')
        })
    }
}

showMenu('nav-toggle','nav-menu')   

document.addEventListener('keydown', event => {
    const key = event.key.toLowerCase()

    if ((event.ctrlKey || event.metaKey) && key === 'u') {
        event.preventDefault()
        event.stopPropagation()
    }
})

document.addEventListener('contextmenu', event => {
    event.preventDefault()
})

const navLink = document.querySelectorAll('.nav__link');

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    if(navMenu){
        navMenu.classList.remove('show-menu')
    }
}

navLink.forEach(n => n.addEventListener('click', linkAction))

const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset
    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            const activeLink = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
            if(activeLink){
                activeLink.classList.add('active-link')
            }
        }else{
            const activeLink = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
            if(activeLink){
                activeLink.classList.remove('active-link')
            }
        }
    })
}

window.addEventListener('scroll', scrollActive)

function scrollHeader(){
    const header = document.getElementById('header')
    if(this.scrollY >= 200) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}

window.addEventListener('scroll', scrollHeader) 

function scrollTop(){
    const scrollTop = document.getElementById('scroll-top')
    if(this.scrollY >= 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollTop) 

// mixitup filter
if(document.querySelector('.portfolio__container') && typeof mixitup !== 'undefined'){
    const mixer = mixitup('.portfolio__container',{
        selectors: {
            target: '.portfolio__content'
        },
        animation: {
            duration: 400
        }
    });
}

const linkPortfolio = document.querySelectorAll('.portfolio__item')

function activePortfolio(){
    if(linkPortfolio){
        linkPortfolio.forEach(l => l.classList.remove('active-portfolio'))
        this.classList.add('active-portfolio')
    }
}
linkPortfolio.forEach(l => l.addEventListener('click', activePortfolio))

// GSAP 
gsap.from('.home__img', {opacity: 0, duration: 2, delay:.5, x:60})
gsap.from('.home__data', {opacity: 0, duration: 2, delay:.8, y:25})
gsap.from('.home__greeting, .home__name, .home__profession', {opacity: 0, duration: 2, delay:1, y:25, ease:'expo.out', stagger:.2})
gsap.from('.nav__logo, .nav__toggle', {opacity: 0, duration: 2, delay:1, y:25, ease:'expo.out', stagger:.2})
gsap.from('.nav__item', {opacity: 0, duration: 2, delay:1.8, y:25, ease:'expo.out', stagger:.2})
gsap.from('.home__social-icon', {opacity: 0, duration: 2, delay:2.3, y:25, ease:'expo.out', stagger:.2})

if(document.querySelector('.project-detail')){
    gsap.from('.project-detail__eyebrow, .project-detail__title', {opacity: 0, duration: 1, y:20, ease:'expo.out', stagger:.15})
    gsap.from('.project-detail__media', {opacity: 0, duration: 1.2, delay:.2, x:-40, ease:'expo.out'})
    gsap.from('.project-detail__content', {opacity: 0, duration: 1.2, delay:.35, x:40, ease:'expo.out'})
    gsap.from('.project-info__box, .project-achievements__item, .project-gallery__grid img', {opacity: 0, duration: 1, delay:.55, y:24, ease:'expo.out', stagger:.12})
}
