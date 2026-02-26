import { useT } from '../../../i18n/useT';

function SphaeraOne() {
    const t = useT('sphaera');

    return (
        <>
            <h1>{t('pageTitle')}</h1>
            <p>{t('content.t1')}</p>
        </>
    )
}

export default SphaeraOne
