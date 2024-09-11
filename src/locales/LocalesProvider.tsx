import { type PropsWithChildren } from 'react';
import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';
import { editorNamespace } from '@/locales/namespaces/editor';

i18next.init({
    fallbackLng: 'en',
    resources: {
        en: {
            editor: editorNamespace,
        },
    },
});

declare module 'i18next' {
    interface CustomTypeOptions {
        resources: {
            editor: typeof editorNamespace;
        };
    }
}

export default function LocalesProvider(props: PropsWithChildren) {
    return <I18nextProvider i18n={i18next} {...props} />;
}
