import { useEffect } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { Home } from './pages/Home'
import { AboutPage } from './pages/AboutPage'
import { SkillsPage } from './pages/SkillsPage'
import { WorkPage } from './pages/WorkPage'
import { ContactPage } from './pages/ContactPage'
import { NotFound } from './pages/NotFound'
import { ServicePage } from './pages/ServicePage'
import { WorkDetails } from './components/WorkDetails'
import { ClientPage } from './pages/ClientPage'
import AOS from 'aos'
import 'aos/dist/aos.css'

function App() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            offset: 100,
            delay: 200,
            easing: 'ease-in-out'
        });
    }, [])
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/skills" element={<SkillsPage />} />
                <Route path="/works" element={<WorkPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/service" element={<ServicePage />} />
                <Route path="/works/:id" element={<WorkDetails />} />
                <Route path="/client" element={<ClientPage />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </Router>
    )
}

export default App
