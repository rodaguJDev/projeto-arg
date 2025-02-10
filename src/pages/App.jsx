import Wave from '../components/wave';

function App() {
    return (
        <div class="h-screen bg-neutral-950">
            <div class="absolute -left-full flex h-screen w-screen">
                <div class="h-full min-w-screen bg-black">
                    <div class="relative h-full w-full overflow-y-clip">
                        <div class="bg-dotted animate-fall absolute -right-10 z-10 h-[400%] w-full"></div>
                    </div>
                </div>
                <div>
                    <Wave />
                </div>
            </div>
            <div class="absolute -right-[100%] flex h-screen">
                <div class="relative">
                    <Wave class="relative -scale-x-100" />
                </div>
                <div class="h-full w-screen bg-black">
                    <div class="relative h-full w-full overflow-y-clip">
                        <div class="bg-dotted animate-fall absolute -left-10 z-10 h-[400%] w-full"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
