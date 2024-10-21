import React from 'react';
import { t } from 'i18next';
import { useApiUser, useDigitalQuery } from '@/api';
import type { Result, UserModel } from '@/models';
import { useTheme } from '@/context';
import { Avatar, Box, Button, Icon } from '@safari-digital/digital-ui';
import LayoutMenu from '../common/LayoutMenu';

export default function Configuration() {
    const apiUser = useApiUser();
    const { theme, switchTheme } = useTheme();
    const { isLoading: userDataLoading, data } = useDigitalQuery<Result<UserModel>>(`/user/${apiUser.id}`);

    return (
        <Box>
            <LayoutMenu
                actions={[{ label: t('layout:configuration.actions.logout'), callback: apiUser.logout }]}
                icon={<Avatar size="small" />}
                label={data?.value.username}
                loading={userDataLoading}
            />
            <Button variant="icon" value={theme} onClick={switchTheme}>
                {theme === 'dark' ? (
                    <Icon.ThemeMoonIcon variant="filled" />
                ) : (
                    <Icon.ThemeSunIcon variant="filled" />
                )}
            </Button>
            <Button variant="icon">
                <Icon.GearIcon variant="filled" />
            </Button>
        </Box>
    );
}
