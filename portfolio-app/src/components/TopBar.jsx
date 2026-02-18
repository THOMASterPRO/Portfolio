import { Link } from 'react-router-dom';
import './TopBar.css';

const TopBar = () => {
    return (
        <nav className="top-bar">
            <Link to="/">Home</Link>
            <Link to="/projects">Projects</Link>
        </nav>
    );
};

export default TopBar;
