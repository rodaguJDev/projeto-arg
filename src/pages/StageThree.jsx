import FadeIn from '../components/FadeIn';
import asset from '../assets/images/3/1.jpeg';
import AnswerBox from '../components/AnswerBox';

function EnigmaTwo() {
    return (
        <div class="grid h-screen bg-black">
            <FadeIn delay={3500}>
                <div class="mx-auto h-full w-full max-w-7xl gap-4 bg-black px-4 py-12 text-center">
                    <div class="inline-block w-fit space-y-2">
                        <img class="pointer-events-none w-128" src={asset} />
                        <AnswerBox
                            hash="6b7b655dd22faa3f10677c512493a8a0"
                            event="load_stage_four"
                        />
                    </div>
                </div>
            </FadeIn>
        </div>
    );
}

export default EnigmaTwo;
