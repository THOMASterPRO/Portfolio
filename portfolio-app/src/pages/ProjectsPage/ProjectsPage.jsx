import { Link } from 'react-router-dom';
import './ProjectsPage.css';
import allergyCard from '../Projects/AllergyCard/images/allergyCard.png';
import sphaeraOne from '../Projects/Sphaera/images/Machine.jpg';


function Projects() {
    return (
        <>
            <h1>Projects page</h1>
            <div className='projects-container'>
                <div className='project'>
                    <Link to="/projects/sphaera-one">
                        <img className='project-image' src={sphaeraOne} alt="My project" />
                        <span className='project-text'>Sphaera One</span>
                    </Link>
                </div>
                <div className='project'>
                    <Link to="/projects/allergy-card">
                        <img className='project-image' src={allergyCard} alt="My project" />
                        <span className='project-text'>Allergy Card</span>
                    </Link>
                </div>
                
            </div>
        </>
    )
}

export default Projects
