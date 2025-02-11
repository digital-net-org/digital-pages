import type { Result } from '@digital-lib/core';
import type { UserModel } from '@digital-lib/dto';
import { useDigitalQuery } from '@digital-lib/react-digital-client';
import { Avatar, Box, Icon, ThemeSwitch } from '@digital-lib/react-digital-ui';
import { useDigitalUser } from '@digital-lib/react-digital-user';
import { t } from 'i18next';
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
