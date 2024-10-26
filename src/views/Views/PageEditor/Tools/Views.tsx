import React from 'react';
import { Button, Icon } from '@safari-digital/digital-ui';
import { t } from 'i18next';
import { EditorTool } from '@/components/Editor';
import { type ViewModel } from '@/models';
import './Views.styles.css';

interface ViewSelectorProps {
    views: Array<ViewModel>;
    selected: ViewModel | undefined;
    onSelect: (view?: ViewModel) => void;
    onCreate: () => void;
}

export default function Views({ views, selected, onCreate, onSelect }: ViewSelectorProps) {
    const handleSelect = (id: number) => {
        if (selected?.id === id) return onSelect();
        const updatedSelection = views.find(view => view.id === id);
        if (updatedSelection) return onSelect(updatedSelection);
    };

    return (
        <EditorTool title={t('editor:tools.views.title')} action={onCreate} icon={Icon.AddIcon}>
            <div className="PageEditor-tools-views">
                {views.map(({ id, title }) => (
                    <Button
                        key={id}
                        variant="icon"
                        selected={id === selected?.id}
                        onClick={() => handleSelect(id)}>
                        {title}
                    </Button>
                ))}
            </div>
        </EditorTool>
    );
}
