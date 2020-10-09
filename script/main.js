const btnBurger = document.querySelector('.btn');
const catalog = document.querySelector('.catalog');
const overlay = document.querySelector('.overlay');

const openMenu = () => {
    catalog.classList.add('open');
    overlay.classList.add('active');
};

btnBurger.addEventListener('click', openMenu);


