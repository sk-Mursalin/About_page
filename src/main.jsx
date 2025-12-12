import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AboutPage from './pages/About.jsx'
import { BrowserRouter } from "react-router-dom";
import NavBar from './components/NavBar.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <NavBar />
      <AboutPage />
    </BrowserRouter>
  </StrictMode>,
)
