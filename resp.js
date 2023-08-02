burger = docoment.querySelector('burger')
navbar = docoment.querySelector('.navbar')
navlist = docoment.querySelector('.nav-list')
RigthNav = docoment.querySelector('.RightNav')


burger.addEventListener('click', ()=>{
RigthNav.classList.toggle('v-class-resp');
navlist.classList.toggle('v-class-resp');
navbar.classList.toggle('h-class-resp');

})