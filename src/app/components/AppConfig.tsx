import React from 'react';
import { t } from 'i18next';
import { Avatar, Box, Icon } from '@safari-digital/digital-ui';
import { useApiUser, useDigitalQuery } from '@/api';
import type { Result, UserModel } from '@/models';
import { ThemeSwitch } from '@/theme';
import AppMenu from './common/AppMenu';

export default function AppConfig() {
    const apiUser = useApiUser();
    const { isLoading: userDataLoading, data } = useDigitalQuery<Result<UserModel>>(`/user/${apiUser.id}`);

    return (
        <Box>
            <AppMenu
                actions={[{ label: t('layout:user.actions.logout'), callback: apiUser.logout }]}
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
