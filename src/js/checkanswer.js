import triggerEvent from './lib/event';

export default function checkAnswer({ answer, correct, eventName, audio }) {
    // load default values
    answer = answer || '';
    correct = correct || '';

    // strip answer and correct
    const strip = (str) => {
        return str
            .toLowerCase()
            .normalize('NFD') // Normalize to decomposed form
            .replace(/[\u0300-\u036f]/g, '') // Remove accents
            .replace(/[^a-z0-9]/g, ''); // Remove non-alphanumeric characters
    };

    const formatAnswer = strip(answer);
    const formatCorrect = strip(atob(correct));

    // log to console an answer check start
    if (!formatAnswer.includes(formatCorrect)) {
        return;
    }

    // log to console a correct answer
    if (!eventName) {
        return;
    }

    if (audio) {
        new Audio(audio).play();
    }

    // trigger specified event
    setTimeout(() => triggerEvent(eventName), 200);
}
