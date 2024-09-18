import React from 'react';
import { digitalConfig } from '@/lib';
import { Editor } from '@/components';
import { SdIcon } from '@/digital-ui';
import { ViewSelector } from './EditorTools';
import { useViewApi } from './api';

export default function Views() {
    const { views, loading, create } = useViewApi();

    return (
        <Editor
            views={views}
            loading={loading}
            config={digitalConfig}
            tools={[
                {
                    key: 'views',
                    icon: SdIcon.FolderIcon,
                    render: <ViewSelector onCreate={create} />,
                },
                {
                    key: 'components',
                    icon: SdIcon.BoxIcon,
                    render: <Editor.Tools.Components />,
                },
                {
                    key: 'tree',
                    icon: SdIcon.LayerIcon,
                    render: <Editor.Tools.Tree />,
                },
            ]}>
            <Editor.Toolbar />
            <Editor.Tools />
            <Editor.Render />
            <Editor.Edit />
        </Editor>
    );
}
