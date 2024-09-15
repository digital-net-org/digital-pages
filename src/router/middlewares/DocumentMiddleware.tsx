import React from 'react';
import { type MiddlewareParams } from './types';
import { t } from 'i18next';

export default function DocumentMiddleware({ name }: MiddlewareParams) {
    React.useEffect(() => {
        const suffix = name ? `${APP_DOCUMENT_NAME_SEPARATOR}${t(`router:page.title.${name}`)}` : '';
        document.title = `${APP_DOCUMENT_NAME}${suffix}`;
    }, [name]);
    return null;
}
