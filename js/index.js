const menu_trigger = document.querySelector('.menu-trigger');
const menu_button = document.querySelector('#menu-button');
const topLine = document.querySelector('.top-line');
const topLineWrap = document.querySelector('.top-line__wrapper');

menu_trigger.addEventListener('click', ()=> {
    menu_button.classList.toggle('active');
    topLine.classList.toggle('open');
    topLineWrap.classList.toggle('active')
})

document.body.addEventListener('click', function (event) {
    if (event.target !== menu_trigger) {
        menu_button.classList.remove('active');
        topLine.classList.remove('open');
        topLineWrap.classList.remove('active')
    }

})