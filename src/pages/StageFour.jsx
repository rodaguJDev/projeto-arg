import FadeIn from '../components/FadeIn';
import asset from '../assets/images/4/1.jpeg';
import AnswerBox from '../components/AnswerBox';

function StageFour() {
    return (
        <div class="grid h-screen bg-black">
            <FadeIn delay={3500}>
                <div class="mx-auto h-full w-full max-w-7xl gap-4 bg-black px-4 py-12 text-center">
                    <div class="inline-block w-fit space-y-2">
                        <img class="pointer-events-none w-128" src={asset} />
                        <AnswerBox
                            hash="bea0184aac2ef216c834b3e24a88c38e"
                            event="load_stage_five"
                        />
                    </div>
                </div>
            </FadeIn>
        </div>
    );
}

export default StageFour;
