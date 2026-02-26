import { useT } from '../../i18n/useT';

function Home() {
    const t = useT('home');

    return (
        <>
            <h1>{t('pageTitle')}</h1>
        </>
    )
}

export default Home
