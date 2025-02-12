import asset from '../assets/images/5/1.jpeg';
import AnswerBox from '../components/AnswerBox';
import StagesLayout from '../layouts/StagesLayout';

function StageFive() {
    return (
        <StagesLayout fadeInDelay={3000}>
            <div class="w-fit space-y-2">
                <img class="pointer-events-none w-128" src={asset} />
                <AnswerBox
                    hash="a77b4f006a4994d245a12247b8e4082c"
                    event="load_stage_six"
                />
            </div>
        </StagesLayout>
    );
}

export default StageFive;
