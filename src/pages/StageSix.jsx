import StagesLayout from '../layouts/StagesLayout';
import TypeWritter from '../js/typewritter';
import sleep from '../js/lib/sleep';
import triggerEvent from '../js/lib/event';

async function start() {
    const writter = new TypeWritter();
    const lines = document.querySelectorAll('.js-poem-line');

    await writter.writeLines(lines);

    // show loading indicator (after 2 seconds)
    await sleep(2000);
    document.querySelector('.js-loading').style.removeProperty('display');

    // redirect to stage seven (after 4 seconds)
    await sleep(4000);
    triggerEvent('load_stage_seven');
}

function StageSix() {
    // window.addEventListener('click', start, { once: true });
    setTimeout(start, 3000);

    return (
        <StagesLayout fadeInDelay={3000}>
            <div class="w-fit space-y-2">
                <div class="max-w-[32rem]">
                    <div class="block text-center text-2xl text-white">
                        <span
                            class="js-poem-line block text-4xl font-bold"
                            data-content="O Rei do Vazio"
                        ></span>
                        <br />
                        <span
                            class="js-poem-line block"
                            data-content="Desde o início, ele ali estava,"
                        ></span>
                        <span
                            class="js-poem-line block"
                            data-content="sem nome, sem rosto, sem voz que clamava."
                        ></span>
                        <span
                            class="js-poem-line block"
                            data-content="Era o vazio, o frio, o fim,"
                        ></span>
                        <span
                            class="js-poem-line block"
                            data-content="um rei sem trono, um rei de nada"
                        ></span>
                        <br />
                        <span
                            class="js-poem-line block"
                            data-content="Do abismo ergueu-se em sombra e dor,"
                        ></span>
                        <span
                            class="js-poem-line block"
                            data-content="trazia silêncio, ruína e temor."
                        ></span>
                        <span
                            class="js-poem-line block"
                            data-content="Veio ao mundo para reinar,"
                        ></span>
                        <span
                            class="js-poem-line block"
                            data-content="com mãos de trevas a tudo apagar."
                        ></span>
                        <br />
                        <br />
                        <span
                            class="js-poem-line block font-medium"
                            data-content="ENIGMA #1 RESOLVIDO"
                            data-delay="300"
                        ></span>
                        <div
                            class="js-loading mt-16 flex items-center justify-center gap-2 bg-white dark:invert"
                            style="display: none"
                        >
                            <span class="sr-only">Loading...</span>
                            <div class="animate-big-bounce h-1 w-1 rounded-full bg-black [animation-delay:-0.3s]"></div>
                            <div class="animate-big-bounce h-1 w-1 rounded-full bg-black [animation-delay:-0.15s]"></div>
                            <div class="animate-big-bounce h-1 w-1 rounded-full bg-black"></div>
                        </div>
                    </div>
                </div>
            </div>
        </StagesLayout>
    );
}

export default StageSix;
