const toggleBtn = document.querySelector('.mainmenu-togglebtn');
const mainmenuul = document.querySelector('.mainmenu-ul');
const mainmenusearch = document.querySelector('.mainmenu-search');

toggleBtn.addEventListener('click', () => {
    mainmenuul.classList.toggle('active');
    mainmenusearch.classList.toggle('active');

})