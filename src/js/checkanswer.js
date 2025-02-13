import triggerEvent from './lib/event';
import MD5 from './lib/md5';

export default function checkAnswer({ answer, correct, eventName, audio }) {
    // load default values
    answer = answer || '';
    correct = correct || '';

    // strip answer
    const stripAnswer = answer.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');

    // log to console an answer check start
    console.log('answer_check');

    if (MD5(stripAnswer) !== correct) {
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
    console.log(`triggering '${eventName}`);
    setTimeout(() => triggerEvent(eventName), 200);
}
