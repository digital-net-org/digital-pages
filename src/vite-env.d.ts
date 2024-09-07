/// <reference types="vite/client" />

// interface ImportMetaEnv {}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}

declare const APP_VERSION: string;
declare const APP_PATH_HOME: string;
declare const APP_PATH_LOGIN: string;
declare const APP_LS_KEY_USER: string;
declare const DIGITAL_API_URL: string;
declare const global: Window;
