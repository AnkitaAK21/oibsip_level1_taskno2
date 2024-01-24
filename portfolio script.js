let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// scroll reveal
ScrollReveal({ 
    // reset: true,
    distance:'80px',
    duration:2000,
    delay:200
 });
ScrollReveal().reveal('.home-content,.heading',{origin:'top'});
ScrollReveal().reveal('.home-img,.skills-container,.project-box',{origin:'bottom'});
ScrollReveal().reveal('.home-content h1,.about-img',{origin:'left'});
ScrollReveal().reveal('.home-content p,.about-content',{origin:'right'});

// types js
const typed = new Typed('.multiple-text',{
    strings: ['Web Developer!','UI Designer!','Programmer!'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});
