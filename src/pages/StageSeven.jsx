import AnswerBox from '../components/AnswerBox';
import TypeWritter from '../js/typewritter';
import StagesLayout from '../layouts/StagesLayout';

async function startWrite() {
    const writter = new TypeWritter(500);
    const lines = document.querySelectorAll('.js-write');

    writter.writeLines(lines);
}

function StageSeven() {
    setTimeout(startWrite, 2000);
    return (
        <StagesLayout fadeInDelay={2000}>
            <div class="w-fit space-y-2">
                <div class="max-w-[32rem]">
                    <div class="block text-center text-xl">
                        <span
                            class="js-write text-2xl text-white"
                            data-content="vcr-Vaab0I"
                        ></span>
                        <br />
                        <br />
                        <AnswerBox
                            hash="ff2e5bbd118dfac505da3a0075cc6a51"
                            event="load_stage_eight"
                        />
                    </div>
                </div>
            </div>
        </StagesLayout>
    );
}

export default StageSeven;
