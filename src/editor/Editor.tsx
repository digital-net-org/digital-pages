import React, { type PropsWithChildren } from 'react';
import { useUrlParams } from '@/router';
import { useFirstRender } from '@/utils';
import type { EntityBase } from '@/models';
import { Layout } from './components';
import useEditor from './useEditor';
import './Editor.styles.css';

export default function Editor({ children }: PropsWithChildren) {
    const [params, setParams] = useUrlParams();
    const editorState = useEditor<EntityBase>();

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
