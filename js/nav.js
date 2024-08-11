// Toggle the menu bar in mobile

// variables

let menuEl = document.querySelector('.js-menu-btn');
let menuBarEL = document.querySelector('.nav-bar');
let iconEl = document.querySelector('.menu button i')

// Add event listener when the menu button is clicked
menuEl.addEventListener('click', ()=>{
    // toggle the menu bar
    menuBarEL.classList.toggle("show");
    if(iconEl.classList.contains('fa-bars')){
        return iconEl.classList.replace('fa-bars', 'fa-times')
    }else{
        return iconEl.classList.replace('fa-times', 'fa-bars')
    }
});
