import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { t } from 'i18next';
import { appRoutes } from './router';

export default function useRouter() {
    const navigate = useNavigate();
    const { pathname } = useLocation();

    const current = React.useMemo(() => {
        const route = appRoutes
            .sort((a, b) => b.path.length - a.path.length)
            .find(({ path }) => pathname.includes(path));
        return route
            ? {
                  ...route,
                  children: undefined,
                  label: t(`router:page.title.${route.name}`),
                  navigate: () => navigate(route.path),
                  isCurrent: pathname === route.path,
              }
            : undefined;
    }, [navigate, pathname]);

    const router = React.useMemo(
        () =>
            appRoutes
                .filter(route => route.isNavigable)
                .sort((a, b) => a.path.localeCompare(b.path))
                .map(({ children: _, ...route }) => ({
                    label: t(`router:page.title.${route.name}`),
                    navigate: () => navigate(route.path),
                    isCurrent: pathname === route.path,
                    ...route,
                })),
        [navigate, pathname],
    );

    return { router, current };
}
