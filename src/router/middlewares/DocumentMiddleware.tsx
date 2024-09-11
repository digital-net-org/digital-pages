import React from 'react';
import { type MiddlewareParams } from './types';

export default function DocumentMiddleware({ name }: MiddlewareParams) {
    React.useEffect(() => {
        document.title = `${name ?? ''} | Safari-Digital`;
    }, [name]);
    return null;
}
