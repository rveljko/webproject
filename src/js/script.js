const openMenu = document.getElementById('openMenu');
const closeMenu = document.getElementById('closeMenu');
const sideBar = document.getElementById('sideBar');

openMenu.onclick = () => {
    sideBar.classList.remove('close');
    document.body.classList.add('noscroll');
    sideBar.classList.add('open');
}

closeMenu.onclick = () => {
    sideBar.classList.remove('open');
    document.body.classList.remove('noscroll');
    sideBar.classList.add('close');
}