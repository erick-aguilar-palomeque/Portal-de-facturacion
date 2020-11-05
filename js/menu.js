const btnMenu = document.getElementById('btn-menu');
const menu = document.getElementById('container-menu');
const conMenu = document.getElementById('cont-menu');
const cont = document.getElementById('pseudo-body')
const body = document.body


let state = false;
btnMenu.addEventListener('click', (e) => {
    if (state === false) {
        menu.style.setProperty('opacity', `${1}`);
        menu.style.setProperty('visibility', 'visible');
        conMenu.style.setProperty('transform', `translateX(${0}%)`)

        cont.style.setProperty('width', `calc(${100}% - var(--menu-width))`)
            // cont.style.setProperty('width', `${80}%`)
        cont.style.setProperty('float', `right`)

        body.style.setProperty('overflow-y', 'hidden')
        btnMenu.classList.remove('icon-menu')
        btnMenu.classList.add('icon-window-close')
        state = true
    } else {
        menu.style.setProperty('opacity', `${0}`);
        menu.style.setProperty('visibility', 'hidden');
        conMenu.style.setProperty('transform', `translateX(${-100}%)`)
        cont.style.setProperty('width', `${100}%`)
        body.style.setProperty('overflow-y', 'visible')
        btnMenu.classList.remove('icon-window-close')
        btnMenu.classList.add('icon-menu')

        state = false
    }
});

const btnUser = document.getElementById('btn-user')
const userWindow = document.getElementById('user-window')

let stateUser = false;
btnUser.addEventListener('click', (e) => {
    if (stateUser === true) {
        userWindow.style.setProperty('opacity', `${1}`);
        userWindow.style.setProperty('visibility', 'visible');
        userWindow.style.setProperty('transform', `translateY(${0}%)`)
        btnUser.classList.remove('icon-down-dir')
        btnUser.classList.add('icon-up-dir')

        stateUser = false;
    } else {
        userWindow.style.setProperty('opacity', `${0}`);
        userWindow.style.setProperty('visibility', 'hidden');
        userWindow.style.setProperty('transform', `translateY(${-100}%)`)
        btnUser.classList.add('icon-down-dir')
        btnUser.classList.remove('icon-up-dir')

        stateUser = true;
    }
});