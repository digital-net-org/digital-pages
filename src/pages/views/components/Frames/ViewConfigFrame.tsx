import { type ViewModel } from '@/models';
import { useEditor } from '@/puck';
import './ViewConfigFrame.styles.css';

interface ViewConfigFrameProps {
    view: ViewModel | undefined;
    onPatch?: (patch: Partial<ViewModel>) => void;
}

export default function ViewConfigFrame({ view, onPatch }: ViewConfigFrameProps) {
    const { activeTool } = useEditor();
    return activeTool?.key === 'views' ? (
        <div className="PageEditor-frame-viewConfig">
            <h4>View Config</h4>
            <pre>{JSON.stringify(view, null, 2)}</pre>
        </div>
    ) : null;
}
