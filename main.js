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

/**
 *
 * @param {HTMLDivElement} swipeObject
 * @param {Function} onSwipeDone
 * @returns {Object}
 */
function swipeListenerFactory(swipeObject) {
    let startX = 0;
    let currentX = 0;
    let isSwiping = false;
    const swipeThreshold = 60; // if swiped more than 60% of the way, finish swipe

    function convertToPercentage(distanceInPixels) {
        let movePercentage;
        // rule of three: the width of the object is, by definition, 100% of the object's length
        // so to convert pixels to percentage, you must use the object as a base
        // multiply by -100 because we're swiping right to left and not left to right (if the value is negative, return a positive percentage)
        movePercentage = (distanceInPixels / swipeObject.offsetWidth) * -100;

        // clamp the values to be between 0 and 100% so the object can't go past the window
        movePercentage = Math.max(0, Math.min(100, movePercentage));

        return movePercentage;
    }

    function swipeStart(event) {
        isSwiping = true;
        startX = event.clientX || event.touches[0].clientX;
        swipeObject.style.transition = "none"; // disable transition animations
    }

    function swipeUpdate(event) {
        if (!isSwiping) return;

        currentX = event.clientX || event.touches[0].clientX;
        let swipeDistance = currentX - startX;
        let percentage = convertToPercentage(swipeDistance);
        console.log(percentage);

        // the `right` parameter needs to be between -100 and 0, so subtract 100 from the movepercentage
        swipeObject.style.right = `${percentage - 100}%`;
    }

    function swipeEnd(event) {
        if (!isSwiping) return;

        swipeObject.style.removeProperty("transition");

        isSwiping = false;
        let swipeDistance = currentX - startX;
        let percentage = convertToPercentage(swipeDistance);

        if (percentage > swipeThreshold) {
            swipeObject.style.right = "0%";
            removeListeners();
        } else {
            swipeObject.style.right = "-100%";
        }
    }

    function removeListeners() {
        document.removeEventListener("mousedown", swipeStart);
        document.removeEventListener("mousemove", swipeUpdate);
        document.removeEventListener("mouseup", swipeEnd);

        // mobile
        document.removeEventListener("touchstart", swipeStart);
        document.removeEventListener("touchmove", swipeUpdate);
        document.removeEventListener("touchend", swipeEnd);
    }

    function loadListeners() {
        // pc
        document.addEventListener("mousedown", swipeStart);
        document.addEventListener("mousemove", swipeUpdate);
        document.addEventListener("mouseup", swipeEnd);

        // mobile
        document.addEventListener("touchstart", swipeStart);
        document.addEventListener("touchmove", swipeUpdate);
        document.addEventListener("touchend", swipeEnd);
    }

    return {
        loadListeners,
        removeListeners,
    };
}

function swipe() {
    /**
     * @type {HTMLDivElement|null}
     */
    const swiper = document.querySelector(".swiper");
    if (swiper) {
        swiper.style.right = "0";
    }
}

function load() {
    // render
    loadWhiteDots();

    // load swiper
    const swipeObject = document.querySelector(".swiper");
    const swipeListener = swipeListenerFactory(swipeObject);
    swipeListener.loadListeners();
}

load();

swipeObject = document.querySelector(".swiper");
