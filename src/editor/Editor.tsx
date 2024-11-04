import React, { type PropsWithChildren } from 'react';
import Layout from './components/Layout';
import { type EditorConfiguration, EditorProvider } from './EditorContext';
import './Editor.styles.css';

export default function Editor<T, TRaw>({
    children,
    ...props
}: PropsWithChildren<EditorConfiguration<T, TRaw>>) {
    return (
        <EditorProvider {...props}>
            <Layout disabled={props.disabled}>{children}</Layout>
        </EditorProvider>
    );
}
