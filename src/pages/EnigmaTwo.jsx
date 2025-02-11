import FadeIn from '../components/FadeIn';
import asset from '../assets/images/3/1.jpeg';
import AnswerBox from '../components/AnswerBox';

function EnigmaTwo() {
    return (
        <div class="grid h-screen bg-black">
            <FadeIn delay={1000}>
                <div class="mx-auto h-full w-full max-w-7xl gap-4 bg-black py-4 text-center">
                    <div class="inline-block w-fit space-y-2">
                        <img
                            class="pointer-events-none w-128"
                            src={asset}
                            alt=""
                        />
                        <AnswerBox
                            hash="c529975d322274a9b6b88588754e97f5"
                            event="load_stage_four"
                        />
                    </div>
                </div>
            </FadeIn>
        </div>
    );
}

export default EnigmaTwo;
