import React from 'react';

export default class RouterBuilder {
    public static build() {
        const raw = this.getRawPages();
        return Object.keys(raw).map(filePath => ({
            path: this.handleSlug(this.buildUrl(filePath)),
            element: React.createElement((raw[filePath] as any).default),
        }));
    }

    public static buildUrl(path: string) {
        const result = path.replace('/src/pages/', '/').replace('/page.tsx', '');
        return result === '' ? '/' : result;
    }

    public static getRawPages = () => import.meta.glob(['/src/pages/**/page.tsx'], { eager: true });

    public static handleSlug = (path: string) => path.replace(/\[(.*?)]/g, ':$1');
}
