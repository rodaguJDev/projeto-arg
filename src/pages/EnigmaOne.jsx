import FadeIn from '../components/FadeIn';
import asset from '../assets/1/1.jpeg';

function EnigmaOne() {
    return (
        <div class="grid h-screen bg-black">
            <FadeIn>
                <div class="mx-auto h-full w-full max-w-7xl gap-4 bg-black py-4 text-center">
                    <div class="inline-block w-fit space-y-2">
                        <img
                            class="pointer-events-none w-128"
                            src={asset}
                            alt=""
                        />
                        <div class="block text-start">
                            <label for="answer" class="text-white">
                                Resposta:
                            </label>
                            <input
                                type="text"
                                id="answer"
                                class="w-full border-0 bg-white p-1 ring-0 outline-0"
                            />
                        </div>
                    </div>
                </div>
            </FadeIn>
        </div>
    );
}

export default EnigmaOne;
