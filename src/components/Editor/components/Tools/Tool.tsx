import React, { Suspense } from 'react';
import useTool from './useTool';
import { SdButton, SdLoader, SdText } from '@/digital-ui';
import { useEditor } from '../../utils';
import './styles.css';

export default function Tool() {
    const { activeTool } = useTool();
    const { loading } = useEditor();

    const hasAction = React.useMemo(
        () => activeTool && activeTool.action && activeTool.actionLabel,
        [activeTool],
    );

    return activeTool ? (
        <div className="Editor-tool">
            <div className="Editor-tool-title">
                <SdText variant="caption">{activeTool.title}</SdText>
                {hasAction && !loading ? (
                    <Suspense fallback={<SdLoader size="small" />}>
                        <SdButton variant="icon" onClick={activeTool.action}>
                            {activeTool.actionLabel}
                        </SdButton>
                    </Suspense>
                ) : null}
                {hasAction && loading ? <SdLoader size="small" /> : null}
            </div>
            {activeTool.render}
        </div>
    ) : null;
}
