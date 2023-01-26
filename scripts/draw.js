'use strict'

const list = document.querySelector('.draws');

list.addEventListener('click', (e) => {
    if (e.target instanceof HTMLLIElement) {

        document.querySelector('.preview').style.backgroundImage = `url(${e.target.firstElementChild.src}`;
        document.querySelector('.wrapper').style.display = 'flex';
    }
})

document.querySelector('.wrapper').addEventListener('click', () => {
    document.querySelector('.wrapper').style.display = 'none';
})