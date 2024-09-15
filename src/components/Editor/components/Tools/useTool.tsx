import React from 'react';
import { t } from 'i18next';
import { useUrlParams } from '@/utils';
import { SdIcon } from '@/digital-ui';
import Blocks from './Blocks/Blocks';
import Tree from './Tree/Tree';
import Views from './Views/Views';
import { useEditor } from '../../utils';

export interface Tool {
    key: string;
    title: string;
    icon: React.ReactNode;
    render: React.ReactNode;
    action?: () => void;
    actionLabel?: React.ReactNode;
}

export default function useTool() {
    const { create } = useEditor();

    const tools = React.useMemo(
        () => [
            {
                key: 'views',
                title: t('editor:tools.views.title'),
                icon: SdIcon.FolderIcon,
                render: <Views />,
                action: create,
                actionLabel: <SdIcon.AddIcon />,
            },
            {
                key: 'components',
                title: t('editor:tools.blocks.title'),
                icon: SdIcon.BoxIcon,
                render: <Blocks />,
            },
            {
                key: 'tree',
                title: t('editor:tools.tree.title'),
                icon: SdIcon.LayerIcon,
                render: <Tree />,
            },
        ],
        [create],
    );

    const { params, setParams } = useUrlParams<{ tool: string }>();
    const activeTool = React.useMemo(() => tools.find(({ key }) => key === params.tool), [params]);
    const setActiveTool = (key: string) => setParams({ tool: key });

    return { tools, activeTool, setActiveTool };
}
