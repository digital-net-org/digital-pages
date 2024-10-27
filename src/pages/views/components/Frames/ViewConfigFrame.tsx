import { type ViewModel } from '@/models';
import './ViewConfigFrame.styles.css';

interface ViewConfigFrameProps {
    view: ViewModel | undefined;
    onPatch?: (patch: Partial<ViewModel>) => void;
}

export default function ViewConfigFrame({ view, onPatch }: ViewConfigFrameProps) {
    return (
        <div className="PageEditor-frame-viewConfig">
            <h4>View Config</h4>
            <pre>{JSON.stringify(view, null, 2)}</pre>
        </div>
    );
}
