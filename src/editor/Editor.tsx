import React, { type PropsWithChildren } from 'react';
import type { Entity } from '@digital-net/core';
import { useFirstRender } from '@digital-net/react-elements';
import { useUrlParams } from '@/router';
import { Layout } from './components';
import useEditor from './useEditor';
import './Editor.styles.css';

export default function Editor({ children }: PropsWithChildren) {
    const [params, setParams] = useUrlParams();
    const editorState = useEditor<Entity>();

    useFirstRender(() => {
        if (!params.tool) setParams({ ...params, tool: editorState.tools[0].key });
    });

    return (
        <Layout {...editorState}>
            <Layout.Toolbar {...editorState} />
            <Layout.ActionBar {...editorState} />
            {children}
        </Layout>
    );
}
