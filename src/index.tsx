import './fontsources';
import './styles.globals.css';
import '@measured/puck/puck.css';
import '@safari-node/core';

import React from 'react';
import ReactDOM from 'react-dom/client';

import { ThemeContextProvider } from '@/context';
import { ApiProviders } from '@/api';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ApiProviders>
            <ThemeContextProvider>
                <App />
            </ThemeContextProvider>
        </ApiProviders>
    </React.StrictMode>,
);
