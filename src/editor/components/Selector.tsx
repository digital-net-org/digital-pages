import type { EntityBase } from '@/models';
import { Button, Icon } from '@safari-digital/digital-ui';
import { t } from 'i18next';
import React from 'react';
import useEditor from '../useEditor';
import Tool from './Tool';

export default function Selector() {
    const { api, create, onCreate, models, selected, setSelected, renderName } = useEditor<EntityBase>();

    const handleSelect = (id: number | string) =>
        setSelected(String(selected?.id) === String(id) ? undefined : models.find(e => e.id === id));

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
                        selected={e.id === selected?.id}
                        onClick={() => handleSelect(e.id)}>
                        {renderName?.(e) ?? e.id}
                    </Button>
                ))}
            </div>
        </Tool>
    );
}
