burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navi = document.querySelector('.navi')
rightnav = document.querySelector('.rightnav')


burger.addEventListener('click',()=>{
    navi.classList.toggle('v-class-responsive');
    rightnav.classList.toggle('v-class-responsive');
    navbar.classList.toggle('h-nav-responsive');

})