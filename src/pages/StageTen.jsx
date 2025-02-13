import asset from '../assets/images/10/1.png';
import TypeWritter from '../js/typewritter';
import StagesLayout from '../layouts/StagesLayout';

async function start() {
    const writter = new TypeWritter(200);
    const lines = document.querySelectorAll('.js-write');

    writter.writeLines(lines);
}

function StageTen() {
    setTimeout(start, 2000);
    return (
        <StagesLayout fadeInDelay={1500}>
            <div class="w-fit space-y-2 text-center">
                <img class="pointer-events-none w-128" src={asset} />
                <span
                    className="js-write mt-12 block text-3xl font-medium text-white"
                    data-content="ELE VAI VOLTAR..."
                ></span>

                <span
                    className="js-write mt-2 block text-xl text-white"
                    data-content="ENIGMA #2 RESOLVIDO"
                ></span>
            </div>
        </StagesLayout>
    );
}

export default StageTen;
