import React from 'react';
import { type FrameModel } from '@/models';

export default function FramePreview(model: FrameModel | undefined) {
    return (
        <div className="PageEditor-frame-viewConfig">
            <h4>View Config</h4>
            <pre>{JSON.stringify(model, null, 2)}</pre>
        </div>
    );
}
