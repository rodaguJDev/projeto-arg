export default class WaveHandler {
    /**
     * @param {import('solid-js').Setter<Number>} setDragDistance
     * @param {Function} onSwipeDone runs when the user has swiped past the drag threshold
     */
    constructor(setDragDistance, onSwipeDone) {
        this.setDragDistance = setDragDistance;
        this.onSwipeDone = onSwipeDone;

        this.startX = 0;
        this.currentX = 0;
        this.isDragging = false;
        this.dragThreshold = -50;

        // bind the function to the class context, so that event calls still work
        this.swipeStart = this.swipeStart.bind(this);
        this.swipeUpdate = this.swipeUpdate.bind(this);
        this.swipeEnd = this.swipeEnd.bind(this);

        this.initListeners();
    }

    getPercentage(distanceInPixels) {
        let movePercentage = Math.abs(
            (distanceInPixels / window.innerWidth) * 100
        );

        // clamp the values to be between 0 and 100% so the object can't go past the window
        movePercentage = Math.max(0, Math.min(100, movePercentage));

        // -100 converts the range from "0 to 100" to "-100 to 0", which matches the `right` and `left` css values
        return Math.round(movePercentage - 100);
    }

    swipeStart(event) {
        // get the offset from the corner of the screen
        this.startX = event.clientX || event.touches?.[0]?.clientX;

        // if the offset is null, do not start a drag
        if (this.startX === undefined) {
            return;
        }

        // now that we are sure a drag has happened, set the state for the other functions
        this.isDragging = true;

        // disable transition animations for the waves while dragging
        for (let wave of document.querySelectorAll('.js-pause-transition')) {
            wave.classList.add('transition-none');
        }
    }

    swipeUpdate(event) {
        if (!this.isDragging) return;

        this.currentX = event.clientX || event.touches[0].clientX;
        const dragPercentage = this.getPercentage(this.currentX - this.startX); // get the percentage for the distance the user dragged

        this.setDragDistance(dragPercentage);

        if (dragPercentage > this.dragThreshold) {
            this.onSwipeDone();
        }
    }

    swipeEnd(event) {
        if (!this.isDragging) return;
        this.isDragging = false;

        // enable transition animations for waves
        for (let wave of document.querySelectorAll('.js-pause-transition')) {
            wave.classList.remove('transition-none');
        }

        if (
            this.getPercentage(this.currentX - this.startX) > this.dragThreshold
        ) {
            this.setDragDistance(0);
        } else {
            this.setDragDistance(-100);
        }
    }

    initListeners() {
        // pc
        document.addEventListener('mousedown', this.swipeStart);
        document.addEventListener('mousemove', this.swipeUpdate);
        document.addEventListener('mouseup', this.swipeEnd);

        // mobile
        document.addEventListener('touchstart', this.swipeStart);
        document.addEventListener('touchmove', this.swipeUpdate);
        document.addEventListener('touchend', this.swipeEnd);
    }
}
