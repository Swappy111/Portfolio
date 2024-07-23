const menuBarEl= document.getElementById('menuBar');
const menuMobileEl = document.querySelector(".menuMobile");

const onClose=()=>{
    menuMobileEl.classList.toggle('show_Menu');
}

menuBarEl.addEventListener('click',()=>{
    console.log('menubar Clicked');
    onClose();
})