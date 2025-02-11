import FadeIn from '../components/FadeIn';

function StageSix() {
    return (
        <div class="grid h-screen bg-black">
            <FadeIn delay={3500}>
                <div class="mx-auto h-full w-full max-w-7xl gap-4 bg-black px-4 py-12 text-center">
                    <div class="inline-block w-fit space-y-2">
                        {/* TODO: create typewritter effect here */}
                        <span className="text-white">WIP</span>
                    </div>
                </div>
            </FadeIn>
        </div>
    );
}

export default StageSix;
