import { useEditor } from '@/editor';
import { type ViewModel } from '@/models';
import './ViewConfigFrame.styles.css';

interface ViewConfigFrameProps {
    toolKey: string;
    view: ViewModel | undefined;
    onPatch?: (patch: Partial<ViewModel>) => void;
}

export default function ViewConfigFrame({ view, onPatch, toolKey }: ViewConfigFrameProps) {
    const { activeTool } = useEditor();
    return activeTool?.key === toolKey ? (
        <div className="PageEditor-frame-viewConfig">
            <h4>View Config</h4>
            <pre>{JSON.stringify(view, null, 2)}</pre>
        </div>
    ) : null;
}
