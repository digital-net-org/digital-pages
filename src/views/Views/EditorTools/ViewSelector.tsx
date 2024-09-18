import React from 'react';
import { t } from 'i18next';
import { SdIcon } from '@/digital-ui';
import { EditorTool, useEditor } from '@/components/Editor';
import './ViewSelector.styles.css';

interface ViewSelectorProps {
    onCreate: () => void;
}

export default function ViewSelector({ onCreate }: ViewSelectorProps) {
    const { views } = useEditor();
    return (
        <EditorTool title={t('editor:tools.views.title')} action={onCreate} icon={SdIcon.AddIcon}>
            <div className="ViewSelectorTool">
                {views.map(({ id, title }) => (
                    <div key={id}>{title}</div>
                ))}
            </div>
        </EditorTool>
    );
}
