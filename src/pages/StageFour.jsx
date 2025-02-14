import asset from '../assets/images/4/1.jpeg';
import AnswerBox from '../components/AnswerBox';
import StagesLayout from '../layouts/StagesLayout';

function StageFour() {
    return (
        <StagesLayout fadeInDelay={3000}>
            <div class="w-fit space-y-2">
                <img class="pointer-events-none w-128" src={asset} />
                <AnswerBox hash="cmVp" event="load_stage_five" />
            </div>
        </StagesLayout>
    );
}

export default StageFour;
