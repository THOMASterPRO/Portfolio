import { Link } from 'react-router-dom';
import './ProjectsPage.css';
import allergyCard from '../Projects/AllergyCard/images/allergyCard.png';
import sphaeraOne from '../Projects/Sphaera/images/Machine.jpg';
import { useT } from '../../i18n/useT';


function Projects() {
    const t = useT('projects');

    return (
        <>
            <h1>{t('pageTitle')}</h1>
            <div className='projects-container'>
                <div className='project'>
                    <Link to="/projects/sphaera-one">
                        <img className='project-image' src={sphaeraOne} alt={t('cards.sphaeraOne.imageAlt')} />
                        <span className='project-text'>{t('cards.sphaeraOne.title')}</span>
                    </Link>
                </div>
                <div className='project'>
                    <Link to="/projects/allergy-card">
                        <img className='project-image' src={allergyCard} alt={t('cards.allergyCard.imageAlt')} />
                        <span className='project-text'>{t('cards.allergyCard.title')}</span>
                    </Link>
                </div>
                
            </div>
        </>
    )
}

export default Projects
