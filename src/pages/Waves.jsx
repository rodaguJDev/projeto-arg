import { createSignal } from 'solid-js';
import Wave from '../components/wave';

function Waves() {
    const [dragDistance, setDragDistance] = createSignal(-100);

    let startX = 0;
    let currentX = 0;
    let isDragging = false;
    let dragPercentage;
    const dragThreshold = -50;

    function getPercentage(distanceInPixels) {
        let movePercentage;
        // rule of three: the width of the object is, by definition, 100% of the object's length
        // so to convert pixels to percentage, you must use the object as a base
        // in other words, the percentage of the object that was dragged is directly related to the width of the screen
        movePercentage = Math.abs((distanceInPixels / window.innerWidth) * 100);

        // clamp the values to be between 0 and 100% so the object can't go past the window
        movePercentage = Math.max(0, Math.min(100, movePercentage));

        // -100 converts the range from "0 to 100" to "-100 to 0", which matches the `right` and `left` css values
        return Math.round(movePercentage - 100);
    }

    function swipeStart(event) {
        // get the offset from the corner of the screen
        startX = event.clientX || event.touches?.[0]?.clientX;

        // if the offset is null, do not start a drag
        if (startX === undefined) {
            return;
        }

        // now that we are sure a drag has happened, set the state for the other functions
        isDragging = true;

        // disable transition animations for the waves while dragging
        for (let wave of document.querySelectorAll('.js-pause-transition')) {
            wave.classList.add('transition-none');
        }
    }

    function swipeUpdate(event) {
        if (!isDragging) return;

        currentX = event.clientX || event.touches[0].clientX;
        dragPercentage = getPercentage(currentX - startX); // get the percentage for the distance the user dragged

        setDragDistance(dragPercentage);
    }

    function swipeEnd(event) {
        if (!isDragging) return;
        isDragging = false;

        // enable transition animations for waves
        for (let wave of document.querySelectorAll('.js-pause-transition')) {
            wave.classList.remove('transition-none');
        }

        if (dragPercentage > dragThreshold) {
            setDragDistance(0);

            // fadeout the waves
            for (let wave of document.querySelectorAll('.js-toggle-opacity')) {
                wave.style.opacity = 0;
            }

            // event to load next stage here
            setTimeout(() => {
                const event = new Event('load_stage_two');
                document.dispatchEvent(event);
            }, 2000);
        } else {
            setDragDistance(-100);
        }
    }

    // pc
    document.addEventListener('mousedown', swipeStart);
    document.addEventListener('mousemove', swipeUpdate);
    document.addEventListener('mouseup', swipeEnd);

    // mobile
    document.addEventListener('touchstart', swipeStart);
    document.addEventListener('touchmove', swipeUpdate);
    document.addEventListener('touchend', swipeEnd);

    return (
        <div class="h-screen bg-neutral-950">
            <div
                class="js-pause-transition absolute -left-full flex h-screen transition-[left] duration-300 ease-in-out"
                style={{ left: `${dragDistance()}%` }}
            >
                <div class="h-full min-w-screen bg-black">
                    <div class="js-toggle-opacity relative h-full w-full overflow-y-clip">
                        <div class="bg-dotted animate-fall absolute -right-10 z-10 h-[400%] w-full"></div>
                    </div>
                </div>
                <div>
                    <Wave />
                </div>
            </div>
            <div
                class="js-pause-transition absolute -right-full flex h-screen flex-row-reverse"
                style={{ right: `${dragDistance()}%` }}
            >
                <div class="h-full w-screen bg-black transition-none">
                    <div class="js-toggle-opacity relative h-full w-full overflow-y-clip">
                        <div class="bg-dotted animate-fall absolute -left-10 z-10 h-[400%] w-full"></div>
                    </div>
                </div>
                <div class="-scale-x-100">
                    <Wave />
                </div>
            </div>
        </div>
    );
}

export default Waves;
