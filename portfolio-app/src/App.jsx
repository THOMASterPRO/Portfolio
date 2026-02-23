import { Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './theme/colors.css';
import TopBar from './components/topBar';
import HomePage from './pages/HomePage/HomePage';
import ProjectsPage from './pages/Projectspage/ProjectsPage';
import SphaeraOne from './pages/Projects/Sphaera/SphaeraOne';
import AllercyCard from './pages/Projects/AllergyCard/AllergyCard';
import ContactPage from './pages/ContactPage/ContactPage';

function App() {
  return (
 
      <div className="app-container">
        <TopBar />
        <div className="app-width-container">
          <main className="main-content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/projects/" element={<ProjectsPage />} />
              <Route path="/projects/sphaera-one" element={<SphaeraOne />} />
              <Route path="/projects/allergy-card" element={<AllercyCard />} />
              <Route path="/contact/" element={<ContactPage />} />
            </Routes>
          </main>
        </div>
      </div>
  )
}

export default App
