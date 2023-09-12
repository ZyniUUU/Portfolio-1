/*-MENU SHOW-*/
const showMenu = (toggleid, navid) =>{
    const toggle = document.getElementById(toogleid),
    nav = document.getElementById(navid)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')

/*--REMOVE MENU MOBILE--*/
const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*SCROLL SECTIONS ACTIVE LINK*/
const section = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageXOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')
    
        if(scrollY> sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_menu a[href*=' + sectionId +']').classList.add('active')
        }else{
            document.querySelector('.nav_menu a[href*=' + sectionId +']').classList.remove('active')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*---------SCROLL REVEAL ANIMATION*/ 
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
    // reset: treu
})
sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 
