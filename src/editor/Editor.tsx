import React, { type PropsWithChildren } from 'react';
import { Layout } from './components';
import { type EditorConfiguration } from './types';
import { EditorProvider } from './context';
import { useDefaultStates } from './utils';
import useEditor from './useEditor';
import './Editor.styles.css';

function Editor({ children }: PropsWithChildren) {
    useDefaultStates();
    const editorState = useEditor();

    return (
        <Layout {...editorState}>
            <Layout.Toolbar {...editorState} />
            <Layout.ActionBar {...editorState} />
            {children}
        </Layout>
    );
}

export default <T, TRaw>({ children, ...props }: PropsWithChildren<EditorConfiguration<T, TRaw>>) => {
    return (
        <EditorProvider {...props}>
            <Editor {...props}>{children}</Editor>
        </EditorProvider>
    );
};
