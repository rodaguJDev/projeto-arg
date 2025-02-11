import FadeIn from '../components/FadeIn';
import asset from '../assets/images/2/1.jpeg';
import AnswerBox from '../components/AnswerBox';

function EnigmaOne() {
    return (
        <div class="grid h-screen bg-black">
            <FadeIn delay={200}>
                <div class="mx-auto h-full w-full max-w-7xl gap-4 bg-black px-4 py-12 text-center">
                    <div class="inline-block w-fit space-y-2">
                        <img class="pointer-events-none w-128" src={asset} />
                        <AnswerBox
                            hash="a2f4d35545d7b743fa2563b210994de9"
                            event="load_stage_three"
                        />
                    </div>
                </div>
            </FadeIn>
        </div>
    );
}

export default EnigmaOne;
