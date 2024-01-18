const toggleBtn = document.querySelector('.mainmenu-togglebtn');
const mainmenu = document.querySelector('.main-menu');

toggleBtn.addEventListener('click', () => {
    mainmenu.classList.toggle('hidden')
})