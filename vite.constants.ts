import { loadEnv } from 'vite';

const env = loadEnv('', process.cwd(), '');

export const constants = {
    APP_VERSION: process.env.npm_package_version,
    APP_DOCUMENT_NAME: 'Safari-Digital',
    APP_ERROR_PREFIX: 'DIGITAL_ERROR:',
    APP_PATH_PUBLIC: ['/login'],
    APP_PATH_NOT_FOUND: '*',
    APP_PATH_HOME: '/',
    APP_PATH_LOGIN: '/login',
    APP_PATH_VIEWS: '/views',
    APP_PATH_EDITOR_FRAMES: '/editor/frames',
    DIGITAL_API_URL: env.DIGITAL_API_URL,
};
