import React from 'react';
import { t } from 'i18next';
import { Box, Icon } from '@digital-net/react-digital-ui';
import { useDigitalUser } from '@digital-net/react-digital-user';
import { useDigitalRouter } from '@digital-net/react-digital';
import Logo from './Logo';
import AppMenu from './common/AppMenu';
import './AppNavigation.styles.css';

export default function AppNavigation() {
    const { router } = useDigitalRouter();
    const { isRoutePublic } = useDigitalUser();

    return (
        <Box className="App-navigation" fullWidth>
            <AppMenu
                actions={router
                    .filter(route => !isRoutePublic(route))
                    .sort((a, b) => a.path.localeCompare(b.path))
                    .map(r => ({
                        callback: r.navigate,
                        selected: r.isCurrent,
                        label: r.documentName,
                    }))}
                icon={<Icon.MenuIcon />}
                label={t('layout:navigation.label')}
            />
            <Logo />
        </Box>
    );
}
