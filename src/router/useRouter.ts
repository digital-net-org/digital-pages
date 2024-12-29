import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { t } from 'i18next';
import { router as appRouter } from './router';

export default function useRouter() {
    const navigate = useNavigate();
    const { pathname } = useLocation();

    const current = React.useMemo(() => {
        const route = appRouter
            .sort((a, b) => b.path.length - a.path.length)
            .find(({ path }) => pathname.includes(path));

        return route
            ? {
                    ...route,
                    element: undefined,
                    label: t(`router:page.title.${route.path}`),
                    navigate: () => navigate(route.path),
                    isCurrent: pathname === route.path,
                }
            : undefined;
    }, [navigate, pathname]);

    const router = React.useMemo(
        () =>
            appRouter.map(({ element: _, ...route }) => ({
                label: t(`router:page.title.${route.path}`),
                navigate: () => navigate(route.path),
                isCurrent: pathname === route.path,
                ...route,
            })),
        [navigate, pathname],
    );

    return { router, current };
}
