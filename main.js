function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function loadWhiteDots() {
    const COUNT = 100;
    const MAX_MARGIN = window.innerWidth < 768 ? 15 : 80;

    const dotsLeft = document.querySelector(".dots-left");
    const dotsRight = document.querySelector(".dots-right");
    const elementPrefix = '<div class="white-dot" style="';
    const elementSufix = '"></div>';

    let resultLeft = "";
    let resultRight = "";

    for (let i = 0; i < COUNT; i++) {
        resultLeft +=
            elementPrefix +
            `margin-left: ${getRandomInt(1, MAX_MARGIN)}px;margin-top: ${getRandomInt(50, 100)}px` +
            elementSufix;
        resultRight +=
            elementPrefix +
            `margin-right: ${getRandomInt(1, MAX_MARGIN)}px;margin-top: ${getRandomInt(50, 100)}px` +
            elementSufix;
    }

    if (dotsLeft) {
        dotsLeft.innerHTML = resultLeft;
    }
    if (dotsRight) {
        dotsRight.innerHTML = resultRight;
    }
}

loadWhiteDots();
