import 'i18next';
import { type editorNamespace } from '@/locales/namespaces/editor';
import { type routerNamespace } from '@/locales/namespaces/router';
import { type layoutNamespace } from '@/locales/namespaces/layout';

declare module 'i18next' {
    interface CustomTypeOptions {
        resources: {
            layout: typeof layoutNamespace;
            editor: typeof editorNamespace;
            router: typeof routerNamespace;
        };
    }
}
