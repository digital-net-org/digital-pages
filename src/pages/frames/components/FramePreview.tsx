import React from 'react';
import { useEditor } from '@/editor';

export default function FramePreview() {
    const { selectedModel } = useEditor();
    return (
        <div className="PageEditor-frame-viewConfig">
            <h4>View Config</h4>
            <pre>{JSON.stringify(selectedModel, null, 2)}</pre>
        </div>
    );
}
