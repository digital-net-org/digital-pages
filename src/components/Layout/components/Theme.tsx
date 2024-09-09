import React from 'react';
import { SdButton, SdIcon } from '@/digital-ui';
import { useThemeContext } from '@/context';

export default function Theme() {
    const { theme, switchTheme } = useThemeContext();

    return (
        <SdButton variant="icon" value={theme} onClick={switchTheme}>
            {theme === 'dark' ? (
                <SdIcon.ThemeMoonIcon variant="filled" />
            ) : (
                <SdIcon.ThemeSunIcon variant="filled" />
            )}
        </SdButton>
    );
}
