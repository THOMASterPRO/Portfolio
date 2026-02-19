import { Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './theme/colors.css';
import TopBar from './components/topBar';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';

function App() {
  return (
 
      <div className="app-container">
        <TopBar />
        <div className="app-width-container">
          <main className="main-content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/projects/" element={<ProjectsPage />} />
            </Routes>
          </main>
        </div>
      </div>
  )
}

export default App
