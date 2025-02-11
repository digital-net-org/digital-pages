import { type FrameModel, FrameModelHelper } from '@digital-lib/dto';
import { PuckEditor } from '@digital-lib/react-digital-puck';

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
