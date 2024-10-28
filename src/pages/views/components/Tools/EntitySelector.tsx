import React from 'react';
import { Button, Icon } from '@safari-digital/digital-ui';
import { EditorTool } from '@/editor';
import './EntitySelector.styles.css';

interface EntitySelectorProps<T extends { id: string | number }> {
    elements: Array<T>;
    selected: T | undefined;
    onSelect: (element?: T) => void;
    onCreate: () => void;
    renderName: (element: T) => string;
    title: string;
}

export default function EntitySelector<T extends { id: string | number }>({
    elements,
    selected,
    onCreate,
    onSelect,
    renderName,
    ...props
}: EntitySelectorProps<T>) {
    const handleSelect = (id: number | string) => {
        if (selected?.id === id) return onSelect();
        const updatedSelection = elements.find(e => e.id === id);
        if (updatedSelection) return onSelect(updatedSelection);
    };

    return (
        <EditorTool {...props} action={onCreate} icon={Icon.AddIcon}>
            <div className="PageEditor-tools-SelectList">
                {elements.map(e => (
                    <Button
                        key={e.id}
                        variant="icon"
                        selected={e.id === selected?.id}
                        onClick={() => handleSelect(e.id)}>
                        {renderName(e)}
                    </Button>
                ))}
            </div>
        </EditorTool>
    );
}
