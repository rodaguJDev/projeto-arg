import { createSignal } from 'solid-js';
import Waves from './pages/Waves';
import EnigmaOne from './pages/EnigmaOne';
import EnigmaTwo from './pages/EnigmaTwo';

const [currentPage, setCurrentPage] = createSignal(Waves);

// Listen for stage switching events
document.addEventListener('load_stage_two', () => {
    setCurrentPage(EnigmaOne);
});

document.addEventListener('load_stage_three', () => {
    setCurrentPage(EnigmaTwo);
});

document.addEventListener('load_stage_four', () => {
    setCurrentPage(Waves);
});

function App() {
    return <>{currentPage() /* Call the signal directly inside JSX */}</>;
}

export default App;
