import '@measured/puck/puck.css';
import '@safari-digital/digital-ui/default.css';
import './styles.globals.css';
import './fontsources';

import '@safari-digital/core';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApiProviders } from '@/api';
import { LocaleProvider } from '@/locales';
import { ThemeProvider } from '@/theme';
import { RouterProvider } from 'react-router-dom';
import { router } from '@/router';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ApiProviders>
            <LocaleProvider>
                <ThemeProvider>
                    <RouterProvider router={router} />
                </ThemeProvider>
            </LocaleProvider>
        </ApiProviders>
    </React.StrictMode>,
);
