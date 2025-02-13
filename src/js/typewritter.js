import keystroke from '../assets/sounds/key.mp3';
import sleep from './lib/sleep';
/**
 * TypeWritter animation functionality for the app, including sounds
 * Parameters: gapDelay(int) and hasSound(boolean)
 *
 * Use guide:
 * The component may pass a NodeList of DOM elements to the writeLines function.
 *
 * Each component may have in its dataset the following:
 * - data-content: The text to be displayed, defaults to ''
 * - data-delay: The delay between each keystroke in ms, defaults to 100ms
 * WARNING: for the sound effect to work the user must interact with the page at least once,
 * either by tapping or clicking. Make sure to add a "click to start" function to your component if you
 * with to use audio
 */
export default class TypeWritter {
    /**
     * TypeWritter animation functionality for the app, including sounds
     * @param {int} gapDelay Delay between line breaks
     * @param {bool} hasSound Wheather to use sound in each keystroke
     *
     * Use guide:
     * The component may pass a NodeList of DOM elements to the writeLines function.
     *
     * Each component may have in its dataset the following:
     * - data-content: The text to be displayed, defaults to ''
     * - data-delay: The delay between each keystroke in ms, defaults to 100ms
     * WARNING: for the sound effect to work the user must interact with the page at least once,
     * either by tapping or clicking. Make sure to add a "click to start" function to your component if you
     * with to use audio
     */
    constructor(keyDelay = 100, gapDelay = 1000, hasSound = true) {
        this.keyDelay = keyDelay;
        this.gapDelay = gapDelay;
        this.hasSound = hasSound;
    }

    playSound() {
        if (this.hasSound) {
            const audio = new Audio(keystroke);
            audio.play().catch((error) => {
                if (error.name === 'NotAllowedError') {
                    console.warn('Audio playback was blocked by the browser.');
                    this.hasSound = false;
                }
            });
        }
    }

    /**
     * @param {Array<HTMLElement>} lines
     * @param {int} gapDelay delay between each line to write
     */
    async writeLines(lines) {
        for (const line of lines) {
            const text = line.dataset.content ?? '';
            const delay = Math.floor(line.dataset.delay) || this.keyDelay;

            line.innerHTML = '';

            for (const char of text) {
                line.innerHTML += char;
                this.playSound();
                await sleep(delay);
            }

            await sleep(this.gapDelay);
        }
    }
}
