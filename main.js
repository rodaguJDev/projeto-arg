function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function getRandomDouble(min, max, precision = 1) {
    const precisionFactor = Math.pow(10, precision);
    return getRandomInt(0, max * precisionFactor) / precisionFactor + min;
}

function loadWhiteDots() {
    const DOT_COUNT = 100;

    const dotsLeft = document.querySelector(".wave__dots--left");
    const dotsRight = document.querySelector(".wave__dots--right");
    const elementPrefix = '<div class="white-dot" style="';
    const elementSufix = '"></div>';

    let resultLeft = "";
    let resultRight = "";

    for (let i = 0; i < DOT_COUNT; i++) {
        resultLeft +=
            elementPrefix +
            `margin-left: ${getRandomDouble(1, 100)}%;margin-top: ${getRandomDouble(50, 100)}px` +
            elementSufix;
        resultRight +=
            elementPrefix +
            `margin-right: ${getRandomDouble(1, 100)}%;margin-top: ${getRandomDouble(50, 100)}px` +
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
