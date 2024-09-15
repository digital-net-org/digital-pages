import { type PropsWithChildren } from 'react';
import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';
import { editorNamespace } from './namespaces/editor';
import { routerNamespace } from './namespaces/router';
import { layoutNamespace } from '@/locales/namespaces/layout';

i18next.init({
    fallbackLng: 'fr',
    resources: {
        fr: {
            layout: layoutNamespace,
            editor: editorNamespace,
            router: routerNamespace,
        },
    },
});

export default function LocalesProvider(props: PropsWithChildren) {
    return <I18nextProvider i18n={i18next} {...props} />;
}
