import one from '../assets/images/8/1.jpeg';
import two from '../assets/images/8/2.jpeg';
import three from '../assets/images/8/3.jpeg';
import AnswerBox from '../components/AnswerBox';
import StagesLayout from '../layouts/StagesLayout';

function StageEight() {
    return (
        <StagesLayout fadeInDelay={1300}>
            <div class="w-fit space-y-2">
                <div class="grid grid-cols-2 justify-start gap-2">
                    <img class="pointer-events-none row-span-2" src={three} />
                    <img class="pointer-events-none h-full w-full" src={one} />
                    <img class="pointer-events-none h-full w-full" src={two} />
                </div>
                <AnswerBox
                    hash="dHLqcyBub2JyZXMgY3JpYW7nYXM="
                    event="load_stage_nine"
                />
            </div>
        </StagesLayout>
    );
}

export default StageEight;
