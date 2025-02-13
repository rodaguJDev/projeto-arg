import asset from '../assets/images/2/1.jpeg';
import AnswerBox from '../components/AnswerBox';
import StagesLayout from '../layouts/StagesLayout';

function EnigmaOne() {
    return (
        <StagesLayout fadeInDelay={200}>
            <div class="w-fit space-y-2">
                <img class="pointer-events-none w-128" src={asset} />
                <AnswerBox hash="Y2Fvcw==" event="load_stage_three" />
            </div>
        </StagesLayout>
    );
}

export default EnigmaOne;
