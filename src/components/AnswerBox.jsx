import triggerEvent from '../js/lib/event';
import audio from '../assets/sounds/answer_correct.mp3';
import MD5 from '../js/lib/md5';
import debounce from '../js/lib/debounce';

function AnswerBox(props) {
    function checkAnswer() {
        /**
         * @type {string}
         */
        const answer = document.getElementById('answer')?.value || '';
        const correct = props.hash || '';
        console.log('answer_check');

        if (MD5(answer.toLowerCase()) === correct) {
            console.log('answer_correct');
            if (props.event) {
                new Audio(audio).play();
                setTimeout(() => triggerEvent(props.event), 200);
            }
        }
    }

    const check = debounce(checkAnswer, 200);

    return (
        <div class="block text-start">
            <label for="answer" class="text-white">
                Resposta:
            </label>
            <input
                type="text"
                id="answer"
                onInput={check}
                class="w-full border-0 bg-white p-1 ring-0 outline-0"
                autofocus
            />
        </div>
    );
}

export default AnswerBox;
