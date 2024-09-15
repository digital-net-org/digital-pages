import React from 'react';
import { t } from 'i18next';
import { useApiUser, useDigitalQuery } from '@/api';
// import { SdButton, SdIcon } from '@/digital-ui';
// import { useThemeContext } from '@/context';
import type { Result, UserModel } from '@/models';
import LayoutMenu from '../common/LayoutMenu';
import { SdAvatar } from '@/digital-ui';

export default function Configuration() {
    // const { theme, switchTheme } = useThemeContext();
    const apiUser = useApiUser();
    const { isLoading: userDataLoading, data } = useDigitalQuery<Result<UserModel>>(`/user/${apiUser.id}`);

    return (
        <div className="Layout-config">
            <LayoutMenu
                actions={[{ label: t('layout:configuration.actions.logout'), callback: apiUser.logout }]}
                icon={<SdAvatar size="small" />}
                label={data?.value.username}
                loading={userDataLoading}
            />
            {/*<SdButton variant="icon" value={theme} onClick={switchTheme}>*/}
            {/*    {theme === 'dark' ? (*/}
            {/*        <SdIcon.ThemeMoonIcon variant="filled" />*/}
            {/*    ) : (*/}
            {/*        <SdIcon.ThemeSunIcon variant="filled" />*/}
            {/*    )}*/}
            {/*</SdButton>*/}
            {/*<SdButton variant="icon">*/}
            {/*    <SdIcon.GearIcon variant="filled" />*/}
            {/*</SdButton>*/}
        </div>
    );
}
