import React from 'react';
import { PuckEditor } from '@digital-lib/react-digital-puck';
import { type FrameModel, FrameModelHelper } from '@/models';

export default function FramePage() {
    return (
        <PuckEditor<FrameModel>
            store="frame"
            accessor="data"
            renderEntityName={e => e?.name ? String(e.name) : ''}
            onCreate={FrameModelHelper.getDefaultPayload}
        />
    );
}
