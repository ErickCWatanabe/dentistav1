const menuBtn = document.querySelector('.btn-menu');
const menu = document.querySelector('.menu');
const links=document.querySelectorAll('.link')
function toggleMenu() {
menuBtn.classList.toggle('menuOn');
menu.classList.toggle('menuOpen'); 
}

function closeMenu() {
menuBtn.classList.remove('menuOn');
menu.classList.remove('menuOpen'); 
}

menuBtn.addEventListener("click", toggleMenu);

links.forEach(link => {
  link.addEventListener('click', closeMenu );
});

