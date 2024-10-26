import React from 'react';
import { t } from 'i18next';
import { useApiUser, useDigitalQuery } from '@/api';
import type { Result, UserModel } from '@/models';
import { Avatar, Box, Button, Icon } from '@safari-digital/digital-ui';
import AppMenu from './common/AppMenu';
import { ThemeSwitch } from '@/theme';

export default function AppConfig() {
    const apiUser = useApiUser();
    const { isLoading: userDataLoading, data } = useDigitalQuery<Result<UserModel>>(`/user/${apiUser.id}`);

    return (
        <Box>
            <AppMenu
                actions={[{ label: t('layout:configuration.actions.logout'), callback: apiUser.logout }]}
                icon={<Avatar size="small" />}
                label={data?.value.username}
                loading={userDataLoading}
                direction="right"
            />
            <ThemeSwitch />
            <Button variant="icon">
                <Icon.GearIcon variant="filled" />
            </Button>
        </Box>
    );
}
