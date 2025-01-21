import React from 'react';
import { t } from 'i18next';
import { PuckEditor } from '@digital-net/react-digital-puck';
import { type FrameModel, FrameModelHelper } from '@/models';
import { digitalPuckConfig } from '@/digitalPuckConfig';

export default function FramePage() {
    return (
        <PuckEditor<FrameModel>
            store="frame"
            accessor="data"
            renderEntityName={e => e?.name ? String(e.name) : ''}
            onCreate={FrameModelHelper.getDefaultPayload}
            config={digitalPuckConfig}
        />
    );
}
