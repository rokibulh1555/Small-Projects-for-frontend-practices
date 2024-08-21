const elem = document.querySelector(".card");

const elem2 = document.querySelector(".cover");

elem.addEventListener('mouseenter', () =>
    elem.classList.add('open')
);

elem.addEventListener('mouseenter', () =>
    elem2.classList.add('open')
);