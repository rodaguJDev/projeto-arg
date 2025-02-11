import { createSignal, onCleanup } from 'solid-js';
import Wave from '../components/wave';
import WaveHandler from '../js/waves';

function loadStageTwo() {
    const event = new Event('load_stage_two');

    // fadeout the waves
    for (const wave of document.querySelectorAll('.js-toggle-opacity')) {
        wave.style.opacity = 0;
    }

    setTimeout(() => document.dispatchEvent(event), 400);
}

function Waves() {
    const [dragDistance, setDragDistance] = createSignal(-100);
    const waveHandler = new WaveHandler(setDragDistance, loadStageTwo);

    onCleanup(() => {
        document.removeEventListener('mousedown', waveHandler.swipeStart);
        document.removeEventListener('mousemove', waveHandler.swipeUpdate);
        document.removeEventListener('mouseup', waveHandler.swipeEnd);

        document.removeEventListener('touchstart', waveHandler.swipeStart);
        document.removeEventListener('touchmove', waveHandler.swipeUpdate);
        document.removeEventListener('touchend', waveHandler.swipeEnd);
    });

    return (
        <div class="h-screen bg-neutral-950">
            <div
                class="js-pause-transition linear absolute -left-full flex h-screen transition-[left] duration-300"
                style={{ left: `${dragDistance()}%` }}
            >
                <div class="h-full min-w-screen bg-black">
                    <div class="js-toggle-opacity relative h-full w-full overflow-y-clip">
                        <div class="bg-dotted animate-fall pointer-events-none absolute -right-10 z-10 h-[400%] w-full"></div>
                    </div>
                </div>
                <div>
                    <Wave />
                </div>
            </div>
            <div
                class="js-pause-transition absolute -right-full flex h-screen flex-row-reverse transition-[right] duration-300 ease-linear"
                style={{ right: `${dragDistance()}%` }}
            >
                <div class="h-full w-screen bg-black transition-none">
                    <div class="js-toggle-opacity relative h-full w-full overflow-y-clip">
                        <div class="bg-dotted animate-fall pointer-events-none absolute -left-10 z-10 h-[400%] w-full"></div>
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
