'use strict';

let current = 0;
const slides = document.querySelector('.slides');
const indicators = document.querySelector('.indicators');
const slide = slides.children

while (current < slide.length) {
    indicators.insertAdjacentHTML('beforeend', `<div class='indicator ${ current == 0 ? 'active' : '' } indicator${current}'>  </div>`)
    current = current + 1
}

setInterval(() => {
    document.querySelector(`.indicator${slide[0].id}`).classList.remove('active')
    slides.insertAdjacentElement('beforeEnd', slide[0])
    document.querySelector(`.indicator${slide[0].id}`).classList.add('active');
}, 5000)

document.querySelector('.leftArrow').addEventListener('click', () => {
    document.querySelector(`.indicator${slide[0].id}`).classList.remove('active')
    slides.insertAdjacentElement('afterbegin', slide[slide.length - 1])
    document.querySelector(`.indicator${slide[0].id}`).classList.add('active');
})

document.querySelector('.rightArrow').addEventListener('click', () => {
    document.querySelector(`.indicator${slide[0].id}`).classList.remove('active')
    slides.insertAdjacentElement('beforeend', slide[0])
    document.querySelector(`.indicator${slide[0].id}`).classList.add('active');
})
