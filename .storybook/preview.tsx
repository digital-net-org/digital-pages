import '@fontsource/noto-color-emoji/400.css';
import '@fontsource/noto-color-emoji/emoji-400.css';
import '@fontsource/noto-color-emoji/emoji.css';
import '@fontsource/roboto-mono/300-italic.css';
import '@fontsource/roboto-mono/300.css';
import '@fontsource/roboto-mono/400-italic.css';
import '@fontsource/roboto-mono/400.css';
import '@fontsource/roboto-mono/500-italic.css';
import '@fontsource/roboto-mono/500.css';
import '@fontsource/roboto-mono/700-italic.css';
import '@fontsource/roboto-mono/700.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '../assets/default.spacing.css';
import '../assets/default.font.css';
import '../assets/default.light.css';
import '../assets/default.dark.css';
import '../assets/website.light.css';
import '../assets/website.dark.css';
import { Preview, StoryFn } from '@storybook/react';
import React from 'react';

const Decorator = (Story: StoryFn) => {
    return (
        <div
            style={{
                boxSizing: 'border-box',
                display: 'flex',
                padding: '2rem',
            }}
        >
            <Story />
        </div>
    );
};

export default {
    decorators: [Decorator],
    parameters: {
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
    },
} satisfies Preview;
