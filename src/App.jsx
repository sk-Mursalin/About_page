
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomePage2 } from './pages/HomeDemo'
// import { HomePage } from './pages/Home'
// import { HomePage3 } from './pages/Homepage3'




export const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage2 />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}
