import { type PropsWithChildren } from 'react';
import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';
import ResourcesBuilder from '@/locales/utils/ResourcesBuilder';

i18next.init({
    fallbackLng: 'fr',
    resources: ResourcesBuilder.build(),
});

export default function LocalesProvider(props: PropsWithChildren) {
    return <I18nextProvider i18n={i18next} {...props} />;
}
