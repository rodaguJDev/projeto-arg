import { createSignal } from 'solid-js';
import Waves from './pages/Waves';
import EnigmaOne from './pages/EnigmaOne';

const [currentPage, setCurrentPage] = createSignal(Waves);

// stage switching events
document.addEventListener('load_stage_two', () => {
    setCurrentPage(EnigmaOne);
});

function App() {
    let page = currentPage();
    return page;
}

export default App;
