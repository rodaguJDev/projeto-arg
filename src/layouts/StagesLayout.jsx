import FadeIn from '../components/FadeIn';

function StagesLayout(props) {
    return (
        <div class="grid h-screen overflow-y-auto bg-black">
            <FadeIn delay={props.fadeInDelay}>
                <div class="mx-auto grid h-full w-full max-w-7xl justify-center gap-4 bg-black px-4 py-12">
                    {props.children}
                </div>
            </FadeIn>
        </div>
    );
}

export default StagesLayout;
