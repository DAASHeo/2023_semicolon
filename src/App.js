import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Reset } from 'styled-reset';
import Main from "./pages/MainPage.js"

function App() {
    return (
        <BrowserRouter>
            <Reset />
            <Routes>
                <Route path="/" element={<Main />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
