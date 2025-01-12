import React from 'react';
import { t } from 'i18next';
import { useDigitalQuery } from '@digital-net/react-digital-client';
import { useDigitalUser } from '@digital-net/react-digital-user';
import { Avatar, Box, Icon, ThemeSwitch } from '@digital-net/react-digital-ui';
import type { UserModel } from '@/models';
import type { Result } from '@digital-net/core';
import AppMenu from './common/AppMenu';

export default function AppConfig() {
    const appUser = useDigitalUser();
    const { isLoading: userDataLoading, data } = useDigitalQuery<Result<UserModel>>(`/user/${appUser.id}`);

    return (
        <Box>
            <AppMenu
                actions={[{ label: t('layout:user.actions.logout'), callback: appUser.logout }]}
                icon={<Avatar size="small" />}
                label={data?.value.username}
                loading={userDataLoading}
                direction="right"
            />
            <ThemeSwitch />
            <AppMenu
                actions={[
                    {
                        label: `${t('layout:configuration.actions.version')} ${APP_VERSION}`,
                    },
                ]}
                icon={<Icon.GearIcon variant="filled" />}
                direction="right"
            />
        </Box>
    );
}
