import { loadEnv } from 'vite';

const env = loadEnv('', process.cwd(), '');

const constants = {
    APP_VERSION: process.env.npm_package_version,
    APP_DOCUMENT_NAME: 'Safari-Digital',
    APP_DOCUMENT_NAME_SEPARATOR: ' | ',
    APP_ERROR_PREFIX: 'DIGITAL_ERROR:',
    APP_PATH_NOT_FOUND: '*',
    APP_PATH_HOME: '/',
    APP_PATH_LOGIN: '/login',
    APP_PATH_VIEWS: '/views',
    APP_PATH_FRAMES: '/frames',
    APP_LS_KEY_USER: 'data-user',
    APP_LS_KEY_THEME: 'data-theme',
    DIGITAL_API_URL: env.DIGITAL_API_URL,
};

export function resolveConstants() {
    return Object.entries(constants).reduce((acc, [key, value]) => {
        acc[key] = JSON.stringify(value);
        return acc;
    }, {});
}
