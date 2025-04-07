/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from '@vitejs/plugin-react';
import checker from 'vite-plugin-checker';
import { defineConfig } from 'vite';
import { resolve } from 'path';
import ViteBuilder from './packages/digital-lib/vite/ViteBuilder';
import { digitalLibConstants } from './packages/digital-lib/vite/digital-lib-constants';
import { constants } from './vite.constants';

// export default ViteBuilder.buildConfig({
//     constants,
//     port: 3045,
//     alias: {
//         '@': resolve(__dirname, 'src/'),
//         '@digital-lib': resolve(__dirname, 'packages/digital-lib/packages/'),
//     },
//     assets: {
//         'styles.puck.css': resolve(__dirname, 'assets/styles.puck.css'),
//         'styles.theme.css': resolve(__dirname, 'assets/styles.theme.css'),
//         'favicon.ico': resolve(__dirname, 'assets/favicon.ico'),
//     },
// });

export default defineConfig({
    define: {
        global: 'globalThis',
        ...ViteBuilder.resolveConstants({ ...digitalLibConstants, ...constants }),
    },
    server: {
        port: 3045,
    },
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src/'),
            '@digital-lib': resolve(__dirname, 'packages/digital-lib/packages/'),
        },
    },
    css: {
        modules: {
            localsConvention: 'camelCase',
        },
    },
    build: {
        outDir: 'dist',
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                lib: resolve(__dirname, 'src/index.tsx'),
                'styles.puck.css': resolve(__dirname, 'assets/styles.puck.css'),
                'styles.theme.css': resolve(__dirname, 'assets/styles.theme.css'),
                'favicon.ico': resolve(__dirname, 'assets/favicon.ico'),
            },
            output: {
                compact: true,
                strict: true,
                format: 'esm',
                sourcemap: true,
                entryFileNames: '[hash].js',
                chunkFileNames: '[hash].js',
                assetFileNames: 'assets/[name][extname]',
            },
        },
    },
    test: {
        globals: true,
        environment: 'jsdom',
    },
    plugins: [react(), checker({ typescript: true })],
});
