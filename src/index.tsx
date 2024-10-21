import '@measured/puck/puck.css';
import '@safari-digital/digital-ui/default.css';
import './styles.globals.css';
import './fontsources';

import '@safari-digital/core';

import React from 'react';
import ReactDOM from 'react-dom/client';

import { ThemeContextProvider } from '@/context';
import { ApiProviders } from '@/api';
import { LocaleProvider } from '@/locales';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ApiProviders>
            <LocaleProvider>
                <ThemeContextProvider>
                    <App />
                </ThemeContextProvider>
            </LocaleProvider>
        </ApiProviders>
    </React.StrictMode>,
);
