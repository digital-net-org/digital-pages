import { type FrameModel, FrameModelHelper } from '@/dto';
import { PuckEditor } from '@/editor';

export default function FramePage() {
    return (
        <PuckEditor<FrameModel>
            store="frame"
            accessor="data"
            renderEntityName={e => (e?.name ? String(e.name) : '')}
            onCreate={FrameModelHelper.getDefaultPayload}
        />
    );
}
