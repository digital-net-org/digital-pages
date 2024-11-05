import React from 'react';
import { t } from 'i18next';
import { Button, Icon } from '@safari-digital/digital-ui';
import type { EntityBase } from '@/models';
import Tool from './Tool';
import useEditor from '../useEditor';

export default function Selector() {
    const { api, create, onCreate, models, selectedModel, selectModel, renderName } = useEditor<EntityBase>();

    const handleSelect = (id: number | string) =>
        selectModel(String(selectedModel?.id) === String(id) ? undefined : models.find(e => e.id === id));

    return (
        <Tool
            title={t(`editor:${api}.tool.title`)}
            actions={[
                {
                    icon: Icon.AddIcon,
                    action: () => onCreate?.(create) ?? create({}),
                },
            ]}>
            <div className="Editor-model-selector">
                {models.map(e => (
                    <Button
                        key={e.id}
                        variant="icon"
                        fullWidth
                        selected={e.id === selectedModel?.id}
                        onClick={() => handleSelect(e.id)}>
                        {renderName?.(e) ?? e.id}
                    </Button>
                ))}
            </div>
        </Tool>
    );
}
