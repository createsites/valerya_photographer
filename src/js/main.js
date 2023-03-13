// Reviews section

// Carousel Flickity
// https://flickity.metafizzy.co/extras.html

let carousel = document.querySelector('.reviews_carousel');

if (carousel) {
    let utils = window.fizzyUIUtils;
    let flkty = new Flickity(carousel, {
        prevNextButtons: false,
        pageDots: false,
        adaptiveHeight: true,
        watchCSS: true,
    });

// elements
    let elements = flkty.getCellElements(); // получаем массив слайдов
    let cellsButtonGroup = document.querySelector('.button-group--cells');

// формируем dom с кнопками навигации
    let buttonClass = 'button is-selected';
    let btnElem;
    for (let i = 0; i < elements.length; i++) {
        if (i > 0) {
            buttonClass = 'button';
        }
        btnElem = document.createElement("button");
        btnElem.className = buttonClass;
        //btnElem.innerText = String(i + 1);
        cellsButtonGroup.appendChild(btnElem);
    }

    let cellsButtons = utils.makeArray(cellsButtonGroup.children);

// update buttons on select
    flkty.on('select', function () {
        let previousSelectedButton = cellsButtonGroup.querySelector('.is-selected');
        let selectedButton = cellsButtonGroup.children[flkty.selectedIndex];
        previousSelectedButton.classList.remove('is-selected');
        selectedButton.classList.add('is-selected');
    });

// cell select
    cellsButtonGroup.addEventListener('click', function (event) {
        if (!matchesSelector(event.target, '.button')) {
            return;
        }
        let index = cellsButtons.indexOf(event.target);
        flkty.select(index);
    });
// previous
    let previousButton = document.querySelector('.button--previous');
    previousButton.addEventListener('click', function () {
        flkty.previous();
    });
// next
    let nextButton = document.querySelector('.button--next');
    nextButton.addEventListener('click', function () {
        flkty.next();
    });
}


// FAQ section
// https://codepen.io/biryuk88/pen/GRXQOba

let questions = document.querySelectorAll('.question');
if (questions) {
    questions.forEach(question => {
        question.addEventListener("click", () => {
            question.classList.toggle('active');
        });
    });
}
