import { createEffect, createSignal, onCleanup } from 'solid-js';

function FadeIn(props) {
    const [visible, setVisible] = createSignal(false);

    setTimeout(() => {
        setVisible(true);
    }, 200);

    return (
        <div
            class={`transition-opacity duration-500 ${visible() ? 'opacity-100' : 'opacity-0'}`}
        >
            {props.children}
        </div>
    );
}

export default FadeIn;
