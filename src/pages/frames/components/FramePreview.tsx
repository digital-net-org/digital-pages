import React from 'react';
import { Editor, useEditor } from '@/editor';

export default function FramePreview() {
    const { selectedModel } = useEditor();
    return (
        <Editor.Preview>
            <div className="PageEditor-frame-viewConfig">
                <h4>View Config</h4>
                <pre>{JSON.stringify(selectedModel, null, 2)}</pre>
            </div>
        </Editor.Preview>
    );
}
