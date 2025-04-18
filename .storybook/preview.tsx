import React from 'react';
import type { StoryFn } from '@storybook/react';
import '@digital-lib/react-digital/Application/App/fontsources';
import '@digital-lib/react-digital-ui/digital.net.defaults.css';
import { ThemeProvider } from '../packages/digital-lib/packages/react-digital';
import { LocalizationMiddleware } from '../packages/digital-lib/packages/react-digital';

export const decorators = (Story: StoryFn) => (
    <div
        style={{
            height: '100vh',
            width: '100vw',
            boxSizing: 'border-box',
            display: 'flex',
            padding: '2rem',
        }}
    >
        <LocalizationMiddleware />
        <ThemeProvider>
            <Story />
        </ThemeProvider>
    </div>
);

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    layout: 'fullscreen',
    options: {
        storySort: {
            order: ['*'],
        },
    },
};
