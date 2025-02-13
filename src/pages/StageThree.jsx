import asset from '../assets/images/3/1.jpeg';
import AnswerBox from '../components/AnswerBox';
import StagesLayout from '../layouts/StagesLayout';

function EnigmaTwo() {
    return (
        <StagesLayout fadeInDelay={3000}>
            <div class="w-fit space-y-2">
                <img class="pointer-events-none w-128" src={asset} />
                <AnswerBox hash="ZWNsaXBzZQ==" event="load_stage_four" />
            </div>
        </StagesLayout>
    );
}

export default EnigmaTwo;
