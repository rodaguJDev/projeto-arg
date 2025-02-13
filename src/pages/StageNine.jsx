import StagesLayout from '../layouts/StagesLayout';
import TypeWritter from '../js/typewritter';
import sleep from '../js/lib/sleep';
import triggerEvent from '../js/lib/event';

async function start() {
    const writter = new TypeWritter(75);
    const lines = document.querySelectorAll('.js-poem-line');

    await writter.writeLines(lines);

    // show loading indicator (after 2 seconds)
    await sleep(2000);
    document.querySelector('.js-loading').style.removeProperty('display');

    // redirect to stage seven (after 4 seconds)
    await sleep(4000);
    triggerEvent('load_stage_ten');
}

function StageNine() {
    // window.addEventListener('click', start, { once: true });
    setTimeout(start, 3000);

    return (
        <StagesLayout fadeInDelay={3000}>
            <div class="w-fit space-y-2">
                <div class="max-w-[32rem]">
                    <div class="block text-center text-2xl text-white">
                        <span
                            class="js-poem-line block text-3xl font-bold"
                            data-content="Três nobres crianças"
                        ></span>
                        <span
                            class="js-poem-line block"
                            data-content="Das sombras surgiu o temido senhor,"
                        ></span>
                        <span
                            class="js-poem-line block"
                            data-content="o rei de lugar nenhum, sem cor, sem ardor."
                        ></span>
                        <span
                            class="js-poem-line block"
                            data-content="Trazia consigo o fim e o nada,"
                        ></span>
                        <span
                            class="js-poem-line block"
                            data-content="erguendo-se em trevas, a terra assombrada."
                        ></span>
                        <span
                            class="js-poem-line block"
                            data-content="Mas eis que surgiram, firmes no chão,"
                        ></span>
                        <span
                            class="js-poem-line block"
                            data-content="três nobres crianças de puro coração."
                        ></span>
                        <span
                            class="js-poem-line block"
                            data-content="Com luz e coragem, ergueram-se então,"
                        ></span>
                        <span
                            class="js-poem-line block"
                            data-content="desafiando o rei sem emoção."
                        ></span>
                        <span
                            class="js-poem-line block"
                            data-content="A batalha ecoou, fogo e trovão,"
                        ></span>
                        <span
                            class="js-poem-line block"
                            data-content="metade do mal foi ao chão."
                        ></span>
                        <span
                            class="js-poem-line block"
                            data-content="Porém, a vitória teve um alto preço,"
                        ></span>
                        <span
                            class="js-poem-line block"
                            data-content="as forças se foram, restou o tropeço."
                        ></span>
                        <span
                            class="js-poem-line block"
                            data-content="Mas mesmo feridos, sabiam no fundo:"
                        ></span>
                        <span
                            class="js-poem-line block"
                            data-content="ainda havia esperança no mundo."
                            data-delay={200}
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

export default StageNine;
