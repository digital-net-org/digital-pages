import React from 'react';
import { App } from '@digital-lib/react-digital';

export default function PagesApp({ children }: React.PropsWithChildren) {
    /* TODO: 
        - Add parameter access to Puck schema upload/selection
    */
    return <App renderSettings={{}}>{children}</App>;
}
