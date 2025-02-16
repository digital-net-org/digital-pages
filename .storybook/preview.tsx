import '@digital-lib/react-digital-ui/chunks/App/fontsources';
import '@digital-lib/react-digital-ui/chunks/App/digital-net.default.css';
import { ThemeProvider } from '../packages/digital-lib/packages/react-digital-ui';
import type { StoryFn } from '@storybook/react';
import { LocalizationProvider } from '../packages/digital-lib/packages/react-digital';
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
        <LocalizationProvider>
            <ThemeProvider>
                <DigitalClientProvider>
                    <Story />
                </DigitalClientProvider>
            </ThemeProvider>
        </LocalizationProvider>
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
