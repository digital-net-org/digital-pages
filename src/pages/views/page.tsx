import { Editor } from '@/editor';
import { defaultPuckData } from '@/editor/config';
import { digitalConfig } from '@/lib';
import { type ViewModel, type FrameModel } from '@/models';
import { Icon } from '@safari-digital/digital-ui';
import { t } from 'i18next';
import React from 'react';
import { PageEditor } from './components';
import { useViews, useFrames } from './utils';

export default function ViewsPage() {
    const { views, selectedView, setSelectedView, ...viewApi } = useViews();
    const { frames, selectedFrame, setSelectedFrame, ...frameApi } = useFrames();

    const isLoading = React.useMemo(
        () => viewApi.loading || frameApi.loading,
        [viewApi.loading, frameApi.loading],
    );

    return (
        <Editor
            loading={isLoading}
            config={digitalConfig}
            disabled={!selectedFrame}
            tools={[
                {
                    key: 'views',
                    icon: Icon.CollectionIcon,
                    alwaysEnabled: true,
                    render: (
                        <PageEditor.Tools.EntitySelector<ViewModel>
                            title={t('editor:tools.views.title')}
                            elements={views}
                            selected={selectedView}
                            onSelect={setSelectedView}
                            onCreate={viewApi.create}
                            renderName={view => view.title}
                        />
                    ),
                },
                {
                    key: 'frames',
                    icon: Icon.LayerIcon,
                    separator: true,
                    alwaysEnabled: true,
                    render: (
                        <PageEditor.Tools.EntitySelector<FrameModel>
                            title={t('editor:tools.frames.title')}
                            elements={frames}
                            selected={selectedFrame}
                            onSelect={setSelectedFrame}
                            onCreate={frameApi.create}
                            renderName={frame => frame.name}
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
            <PageEditor.Frames.ViewConfig view={selectedView} toolKey="views" />
            <PageEditor.Frames.Render data={defaultPuckData} toolKey="frames" />
            <PageEditor.Frames.Edit data={defaultPuckData} toolKey="frames" />
        </Editor>
    );
}
