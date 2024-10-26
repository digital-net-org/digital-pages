import React from 'react';
import { Icon } from '@safari-digital/digital-ui';
import { digitalConfig } from '@/lib';
import { Editor } from '@/components';
import { PageEditor } from './PageEditor';
import { useViews } from './utils';

export default function Views() {
    const { views, selectedView, setSelectedView, loading, create } = useViews();

    return (
        <Editor
            loading={loading}
            config={digitalConfig}
            // disabled
            tools={[
                {
                    key: 'views',
                    icon: Icon.FolderIcon,
                    separator: true,
                    alwaysEnabled: true,
                    render: (
                        <PageEditor.Tools.Views
                            views={views}
                            selected={selectedView}
                            onSelect={setSelectedView}
                            onCreate={create}
                        />
                    ),
                },
                {
                    key: 'components',
                    icon: Icon.BoxIcon,
                    render: <PageEditor.Tools.Components />,
                },
                {
                    key: 'tree',
                    icon: Icon.LayerIcon,
                    render: <PageEditor.Tools.Tree />,
                },
            ]}>
            <PageEditor.Frames.ViewConfig view={selectedView} />
            <PageEditor.Frames.Render />
            <PageEditor.Frames.Edit />
        </Editor>
    );
}
