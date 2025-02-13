import triggerEvent from './lib/event';
import MD5 from './lib/md5';

export default function checkAnswer({ answer, correct, eventName, audio }) {
    // load default values
    answer = answer || '';
    correct = correct || '';

    // strip answer
    const strip = (str) => {
        return str
            .toLowerCase()
            .normalize('NFD') // Normalize to decomposed form
            .replace(/[\u0300-\u036f]/g, '') // Remove accents
            .replace(/[^a-z0-9]/g, ''); // Remove non-alphanumeric characters
    };
    const stripAnswer = strip(answer);

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
    console.log(`triggering '${eventName}'`);
    setTimeout(() => triggerEvent(eventName), 200);
}
