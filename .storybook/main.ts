export default {
    stories: ['../src/**/*.story.@(tsx)', '../packages/**/*.story.@(tsx)'],
    addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
    framework: {
        name: '@storybook/react-vite',
        options: {},
    },
};
