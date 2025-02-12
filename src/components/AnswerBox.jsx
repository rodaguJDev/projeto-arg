import audio from '../assets/sounds/answer_correct.mp3';
import debounce from '../js/lib/debounce';
import checkAnswer from '../js/checkanswer';

function AnswerBox(props) {
    const defaultCheck = debounce(() => {
        checkAnswer({
            answer: document.getElementById('answer')?.value || '',
            correct: props.hash || '',
            eventName: props.event || '',
            audio: audio,
        });
    }, 200);

    return (
        <div class="block text-start">
            <label for="answer" class="text-white">
                Resposta:
            </label>
            <input
                type="text"
                id="answer"
                onInput={props.check || defaultCheck}
                class="w-full border-0 bg-white p-1 ring-0 outline-0"
                autofocus
            />
        </div>
    );
}

export default AnswerBox;
