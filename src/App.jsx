
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomePage2 } from './pages/HomeDemo'
import { HomePage } from './pages/Home'




export const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}
