import React from 'react';
import { t } from 'i18next';
import { Box, Icon } from '@safari-digital/digital-ui';
import { publicRoutes, useRouter } from '@/router';
import Logo from './Logo';
import AppMenu from './common/AppMenu';
import './AppNavigation.styles.css';

export default function AppNavigation() {
    const { router } = useRouter();

    return (
        <Box className="App-navigation" fullWidth>
            <AppMenu
                actions={router
                    .filter(route => !publicRoutes.includes(route.path))
                    .sort((a, b) => a.path.localeCompare(b.path))
                    .map(r => ({
                        callback: r.navigate,
                        selected: r.isCurrent,
                        label: r.label,
                    }))}
                icon={<Icon.MenuIcon />}
                label={t('layout:navigation.label')}
            />
            <Logo />
        </Box>
    );
}
