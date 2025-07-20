let prevButton = document.getElementById('prev');
let nextButton = document.getElementById('next');
let container = document.querySelector('.container'); // É a section
let items = container.querySelectorAll('.list .item'); // Pega todos os items
let indicator = document.querySelector('.indicators');
let dots = indicator.querySelectorAll('ul li');
let active = 0;
let firstPosition = 0;
let lastPosition = items.length - 1;//Posição em array (começando em 0)
let list = container.querySelector('.list')

function setSlider() {
    let itemOld = container.querySelector('.list .item.active')
    itemOld.classList.remove('active');
    let dotsOld = indicator.querySelector('ul li.active');
    dotsOld.classList.remove('active');
    dots[active].classList.add('active')
    indicator.querySelector('.number').innerHTML = '0' + (active + 1)
}

nextButton.onclick = () => {
    list.style.setProperty('--calculation', 1)
    active = active + 1 > lastPosition ? 0 : active + 1;
    setSlider();
    items[active].classList.add('active');
}

prevButton.onclick = () => {
    list.style.setProperty('--calculation', -1)
    active = active - 1 < firstPosition ? 2 : active - 1;
    setSlider();
    items[active].classList.add('active');
}

