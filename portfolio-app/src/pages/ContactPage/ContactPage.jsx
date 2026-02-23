import './ContactPage.css';
import linkedinIcon from '../../assets/linkedin.svg';
import mailIcon from '../../assets/email.svg';

function Contact() {
    return (
        <>
            <h1>Contact</h1>

            <p>
                You can contact me through any of these channels:
            </p>

            <div className="channel-buttons">
                <button onClick={() => window.open('https://www.linkedin.com/in/thomas-bezemer-3780a3227/', '_blank')} className="contact-btn">
                    <img src={linkedinIcon} alt="" aria-hidden="true" className="contact-btn-icon" />
                    <span>LinkedIn</span>
                </button>

                <button onClick={() => (window.location.href = 'mailto:thomas@bezemer.net')} className="contact-btn">
                    <img src={mailIcon} alt="" aria-hidden="true" className="contact-btn-icon" />
                    <span>Email</span>
                </button>
            </div>


        </>
    )
}

export default Contact
