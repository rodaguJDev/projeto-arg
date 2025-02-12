import { createSignal } from 'solid-js';
import Start from './pages/Start';
import StageTwo from './pages/StageTwo';
import StageThree from './pages/StageThree';
import StageFour from './pages/StageFour';
import StageFive from './pages/StageFive';
import StageSix from './pages/StageSix';
import StageSeven from './pages/StageSeven';

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

document.addEventListener('load_stage_seven', () => {
    setCurrentPage(StageSeven);
});

function App() {
    return <>{currentPage()}</>;
}

export default App;
