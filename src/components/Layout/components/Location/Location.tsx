import React from 'react';
import { useLocation } from 'react-router-dom';
import { appRoutes } from '@/router';
import { Box } from '@safari-digital/digital-ui';
import { t } from 'i18next';

export default function Location() {
    const { pathname } = useLocation();
    const pathName = React.useMemo(
        () =>
            appRoutes
                .sort((a, b) => b.path.length - a.path.length)
                .find(({ path }) => pathname.includes(path))?.name,
        [pathname],
    );

    return (
        <Box justify="center" fullWidth>
            {pathName ? t(`router:page.title.${pathName}`) : null}
        </Box>
    );
}
