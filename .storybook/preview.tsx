import '@digital-lib/react-digital/Application/App/fontsources';
import '@digital-lib/react-digital/Application/App/digital-net.default.css';
import { ThemeProvider } from '../packages/digital-lib/packages/react-digital';
import type { StoryFn } from '@storybook/react';
import { LocalizationMiddleware } from '../packages/digital-lib/packages/react-digital';
import { DigitalClientProvider } from '../packages/digital-lib/packages/react-digital-client';
import React from 'react';

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
            <DigitalClientProvider>
                <Story />
            </DigitalClientProvider>
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
