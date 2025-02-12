import { createEffect, createSignal, onCleanup } from 'solid-js';

function FadeIn(props) {
    const [visible, setVisible] = createSignal(false);

    setTimeout(() => {
        setVisible(true);
    }, props.delay || 200);

    return (
        <div
            class={`transition-opacity duration-[2000ms] ${visible() ? 'opacity-100' : 'opacity-0'}`}
        >
            {props.children}
        </div>
    );
}

export default FadeIn;
