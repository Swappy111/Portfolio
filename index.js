const menuBarElmt = document.getElementById('menuIcon');
const menuMobile = document.querySelector('.menuMobileItem');

const onClose=()=>{
    menuMobile.classList.toggle('showMenu');
}

menuBarElmt.addEventListener('click',()=>{
    console.log('menu clicked');
    onClose();
})