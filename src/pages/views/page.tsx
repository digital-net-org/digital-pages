import React from 'react';
import { t } from 'i18next';
import { Icon } from '@safari-digital/digital-ui';
import { digitalConfig } from '@/lib';
import { Editor } from '@/editor';
import { type ViewModel } from '@/models';
import { PageEditor } from './components';
import { useViews } from './utils';

export default function ViewsPage() {
    const { views, selectedView, setSelectedView, loading, create } = useViews();

    return (
        <Editor
            loading={loading}
            config={digitalConfig}
            // disabled
            tools={[
                {
                    key: 'views',
                    icon: Icon.CollectionIcon,
                    separator: true,
                    alwaysEnabled: true,
                    render: (
                        <PageEditor.Tools.EntitySelector<ViewModel>
                            title={t('editor:tools.views.title')}
                            elements={views}
                            selected={selectedView}
                            onSelect={setSelectedView}
                            onCreate={create}
                            renderName={view => view.title}
                        />
                    ),
                },
                {
                    key: 'components',
                    icon: Icon.DiamondIcon,
                    render: <PageEditor.Tools.Components />,
                },
                {
                    key: 'tree',
                    icon: Icon.DiagramIcon,
                    render: <PageEditor.Tools.Tree />,
                },
            ]}>
            <PageEditor.Frames.ViewConfig view={selectedView} />
            <PageEditor.Frames.Render />
            <PageEditor.Frames.Edit />
        </Editor>
    );
}
