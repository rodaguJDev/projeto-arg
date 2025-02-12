import { createSignal } from 'solid-js';
import Start from './pages/Start';
import StageTwo from './pages/StageTwo';
import StageThree from './pages/StageThree';
import StageFour from './pages/StageFour';
import StageFive from './pages/StageFive';
import StageSix from './pages/StageSix';

const [currentPage, setCurrentPage] = createSignal(Start);

// Listen for stage switching events
document.addEventListener('load_stage_two', () => {
    setCurrentPage(StageTwo);
});

document.addEventListener('load_stage_three', () => {
    setCurrentPage(StageThree);
});

document.addEventListener('load_stage_four', () => {
    setCurrentPage(StageFour);
});

document.addEventListener('load_stage_five', () => {
    setCurrentPage(StageFive);
});

document.addEventListener('load_stage_six', () => {
    setCurrentPage(StageSix);
});

function App() {
    // TODO: Remove debug mark
    return <StageSix></StageSix>;
    // return <>{currentPage() /* Call the signal directly inside JSX */}</>;
}

export default App;
