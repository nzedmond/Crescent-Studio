import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import OurWork from './pages/OurWork';
import CaseStudy from './pages/CaseStudy';
import Team from './pages/Team';
import BehindTheScenes from './pages/BehindTheScenes';
import ContactPage from './pages/ContactPage';
import NotFound from './pages/NotFound';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="work" element={<OurWork />} />
                    <Route path="work/:slug" element={<CaseStudy />} />
                    <Route path="team" element={<Team />} />
                    <Route path="bts" element={<BehindTheScenes />} />
                    <Route path="contact" element={<ContactPage />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
