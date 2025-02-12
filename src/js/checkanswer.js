import triggerEvent from './lib/event';
import MD5 from './lib/md5';

export default function checkAnswer({ answer, correct, eventName, audio }) {
    // load default values
    answer = answer || '';
    correct = correct || '';

    // log to console an answer check start
    console.log('answer_check');

    if (MD5(answer.toLowerCase()) !== correct) {
        return;
    }

    // log to console a correct answer
    console.log('answer_correct');

    if (!eventName) {
        return;
    }

    if (audio) {
        new Audio(audio).play();
    }

    // trigger specified event
    setTimeout(() => triggerEvent(eventName), 200);
}
