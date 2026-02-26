import './ContactPage.css';
import linkedinIcon from '../../assets/linkedin.svg';
import mailIcon from '../../assets/email.svg';
import { useT } from '../../i18n/useT';

function Contact() {
    const t = useT('contact');

    return (
        <>
            <h1>{t('pageTitle')}</h1>

            <p>
                {t('intro')}
            </p>

            <div className="channel-buttons">
                <button onClick={() => window.open('https://www.linkedin.com/in/thomas-bezemer-3780a3227/', '_blank')} className="contact-btn">
                    <img src={linkedinIcon} alt="" aria-hidden="true" className="contact-btn-icon" />
                    <span>{t('channels.linkedin')}</span>
                </button>

                <button onClick={() => (window.location.href = 'mailto:thomas@bezemer.net')} className="contact-btn">
                    <img src={mailIcon} alt="" aria-hidden="true" className="contact-btn-icon" />
                    <span>{t('channels.email')}</span>
                </button>
            </div>


        </>
    )
}

export default Contact
