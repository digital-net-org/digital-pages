import React from 'react';
import { useLocation } from 'react-router-dom';
import { appRoutes } from '@/router';
import { t } from 'i18next';
import './styles.css';

export default function Location() {
    const { pathname } = useLocation();
    const pathName = React.useMemo(
        () =>
            appRoutes
                .sort((a, b) => b.path.length - a.path.length)
                .find(({ path }) => pathname.includes(path))?.name,
        [pathname],
    );

    return <div className="Layout-location">{pathName ? t(`router:page.title.${pathName}`) : null}</div>;
}
