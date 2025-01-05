import React from 'react';
import { t } from 'i18next';
import { PuckEditor } from '@digital-net/react-digital-puck';
import { type FrameModel, FrameModelHelper } from '@/models';

export default function FramePage() {
    return (
        <PuckEditor<FrameModel>
            store="frame"
            accessor="data"
            renderToolName={tool => t(`puck:tools.${tool}.title`)}
            renderEntityName={e => String(e.name)}
            onCreate={FrameModelHelper.getDefaultPayload}
        />
    );
}
