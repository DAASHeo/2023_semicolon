import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Reset } from 'styled-reset';
import Main from './pages/Main';

function App() {
    return (
        <BrowserRouter>
            <>
                <Reset />
                <Routes>
                    <Route exact path="/" element={<Main />} />
                </Routes>
            </>
        </BrowserRouter>
    );
}

export default App;