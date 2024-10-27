import '@measured/puck/puck.css';
import '@safari-digital/digital-ui/default.css';
import './styles.globals.css';
import './styles.theme.css';
import './styles.puck.css';
import './fontsources';

import '@safari-digital/core';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApiProviders } from '@/api';
import { LocaleProvider } from '@/locales';
import { ThemeProvider } from '@/theme';
import { RouterProvider } from '@/router';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ApiProviders>
            <LocaleProvider>
                <ThemeProvider>
                    <RouterProvider />
                </ThemeProvider>
            </LocaleProvider>
        </ApiProviders>
    </React.StrictMode>,
);
