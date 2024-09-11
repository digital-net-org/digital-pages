import './fontsources';
import './styles.globals.css';
import '@measured/puck/puck.css';
import '@safari-node/core';

import React from 'react';
import ReactDOM from 'react-dom/client';

import { ThemeContextProvider } from '@/context';
import App from './App';
import RtkProvider from './api/ReactQuery/RtkProvider';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ThemeContextProvider>
            <RtkProvider>
                <App />
            </RtkProvider>
        </ThemeContextProvider>
    </React.StrictMode>,
);
