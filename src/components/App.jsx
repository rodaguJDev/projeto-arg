function App() {
    return (
        <div class="bg-neutral-950">
            <svg
                class="relative z-0 h-screen w-30"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 32 150 40"
                preserveAspectRatio="none"
                shape-rendering="auto"
            >
                <defs>
                    <path
                        id="gentle-wave"
                        d="M0-30V190H49.5c0-7.5 56.25-14.5 56.25-22S49.5 153.5 49.5 146s56.25-14.5 56.25-22S49.5 109.5 49.5 102s56.25-14.5 56.25-22S49.5 65.5 49.5 58s56.25-14.5 56.25-22S49.5 21.5 49.5 14 105.75-.5 105.75-8 49.5-22.5 49.5-30Z"
                    />
                </defs>
                <g class="wave">
                    <use
                        xlink:href="#gentle-wave"
                        x="0"
                        y="0"
                        fill="rgba(0,0,0,0.7)"
                    />
                    <use
                        xlink:href="#gentle-wave"
                        x="0"
                        y="0"
                        fill="rgba(0,0,0,0.5)"
                    />
                    <use
                        xlink:href="#gentle-wave"
                        x="0"
                        y="0"
                        fill="rgba(0,0,0,0.3)"
                    />
                    <use
                        xlink:href="#gentle-wave"
                        x="0"
                        y="0"
                        fill="rgba(0,0,0,0.8)"
                    />
                </g>
            </svg>
        </div>
    );
}

export default App;
