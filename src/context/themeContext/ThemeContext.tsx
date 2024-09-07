import React, { createContext, type PropsWithChildren } from 'react';
import { useLocalStorage } from '@safari-node/use-hooks';

export type ThemeOption = 'dark' | 'light';

export const ThemeContext = createContext({
    theme: undefined as ThemeOption | undefined,
    switchTheme: () => {},
});

export default function ThemeProvider(props: PropsWithChildren) {
    const stored = useLocalStorage<ThemeOption>(APP_LS_KEY_THEME);
    const [theme, setTheme] = React.useState<ThemeOption | undefined>(stored.value ?? undefined);

    React.useEffect(() => {
        if (stored.value === undefined || stored.value === null) {
            const defaultValue = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
            stored.update(defaultValue);
            setTheme(defaultValue);
        }
    }, [stored]);

    React.useEffect(
        () => (theme ? document.documentElement.setAttribute(APP_LS_KEY_THEME, theme) : void 0),
        [theme],
    );

    const switchTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        stored.update(newTheme);
    };

    return <ThemeContext.Provider {...props} value={{ theme, switchTheme }} />;
}
