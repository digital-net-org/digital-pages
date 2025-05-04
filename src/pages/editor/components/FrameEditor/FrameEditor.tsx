import { type Data } from '@measured/puck';
import React from 'react';
import { useStoredEntity } from '@digital-lib/react-digital';
import type { FrameModel } from '@/dto';
import { Editor, type EditorProps } from '../BaseEditor';
import { PuckEditor, PuckEditorHelper } from './PuckEditor';
import { frameTools } from './Tools';
import { useFrameUrlState } from './useFrameUrlState';
import { useFrameCrud } from './useFrameCrud';
import FrameEditorHelper from './FrameEditorHelper';
import { FrameNav } from './FrameEditorNav';
import './FrameEditor.styles.css';

export function FrameEditor() {
    const [panelState, setPanelState] = React.useState<EditorProps['panelState']>('open');
    const handlePanel = () => setPanelState(prev => (prev === 'closed' ? 'open' : 'closed'));

    const { currentEntity, currentTool, set } = useFrameUrlState();
    const { storedEntity, storedExists, saveEntity, deleteEntity } = useStoredEntity<FrameModel>(
        FrameEditorHelper.store,
        currentEntity
    );

    const { entity, entities, isLoading, handleCreate, handleDelete, handlePatch } = useFrameCrud({
        stored: storedEntity,
        onDelete: async () => await deleteEntity(),
        onPatch: async () => await deleteEntity(),
    });

    const handlePuckChange = async (data: Data) => {
        if (!isLoading || !entity) {
            return;
        }
        if (!PuckEditorHelper.deepEquality(data, entity.data)) {
            await saveEntity({ ...entity, data: JSON.stringify(data) });
        } else {
            await deleteEntity();
        }
    };

    return (
        <Editor
            className={FrameEditorHelper.className}
            loading={isLoading}
            modified={entity && storedExists}
            saved={entity && !storedExists}
            panelState={panelState}
            setPanelState={handlePanel}
            onSave={handlePatch}
            onDelete={handleDelete}
            renderName={() => entity?.name}
            renderPanel={() => (
                <FrameNav
                    entity={entity}
                    entities={entities}
                    isLoading={isLoading}
                    onCreate={handleCreate}
                    onSelect={id => set('entity', id)}
                    onClose={handlePanel}
                />
            )}
            actions={frameTools.map(tool => ({
                ...tool,
                disabled: !entity,
                selected: currentTool?.id === tool.id,
                onSelect: () => set('tool', tool.id),
            }))}
        >
            <PuckEditor entity={entity} config={undefined} isLoading={isLoading} onChange={handlePuckChange} />
        </Editor>
    );
}
