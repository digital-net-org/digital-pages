import React, { createContext, type PropsWithChildren } from 'react';
import { LocalStorage } from '@safari-digital/core';

export type ThemeOption = 'dark' | 'light';

export const ThemeContext = createContext({
    theme: undefined as ThemeOption | undefined,
    switchTheme: () => {},
});

export default function ThemeProvider(props: PropsWithChildren) {
    const [value, setValue] = React.useState(LocalStorage.get<ThemeOption>(APP_LS_KEY_THEME));

    React.useEffect(() => {
        LocalStorage.onSet<ThemeOption>(APP_LS_KEY_THEME, theme => setValue(theme));
        LocalStorage.onRemove(APP_LS_KEY_THEME, () => setValue(undefined));
        return () => LocalStorage.clearListeners(APP_LS_KEY_THEME);
    }, []);

    React.useEffect(() => {
        if (value === undefined) {
            const defaultValue = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
            LocalStorage.set(APP_LS_KEY_THEME, defaultValue);
        }
    }, [value]);

    React.useEffect(
        () => (value ? document.documentElement.setAttribute(APP_LS_KEY_THEME, value) : void 0),
        [value],
    );

    const switchTheme = () => {
        const newTheme = value === 'light' ? 'dark' : 'light';
        LocalStorage.set(APP_LS_KEY_THEME, newTheme);
    };

    return <ThemeContext.Provider {...props} value={{ theme: value, switchTheme }} />;
}
