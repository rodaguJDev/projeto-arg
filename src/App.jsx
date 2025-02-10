import { createSignal } from 'solid-js';
import Waves from './pages/Waves';
import EnigmaOne from './pages/EnigmaOne';

const [currentPage, setCurrentPage] = createSignal(Waves);

// Listen for stage switching events
document.addEventListener('load_stage_two', () => {
    setCurrentPage(EnigmaOne);
});

function App() {
    return <>{currentPage() /* Call the signal directly inside JSX */}</>;
}

export default App;
