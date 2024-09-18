import React, { type PropsWithChildren } from 'react';
import { SdButton, type SdIcon, SdText } from '@/digital-ui';
import type { ValueOf } from '@/types';
import useEditor from '../useEditor';
import './EditorTool.styles.css';

export interface EditorToolProps extends PropsWithChildren {
    title: string;
    action?: () => void | Promise<void>;
    icon?: ValueOf<typeof SdIcon>;
}

export default function EditorTool({ children, title, action, icon }: EditorToolProps) {
    const { loading } = useEditor();
    const hasAction = React.useMemo(() => action && icon, [action, icon]);

    return (
        <React.Fragment>
            <div className="Editor-tool-title">
                <SdText variant="caption">{title}</SdText>
                {hasAction ? (
                    <SdButton variant="icon" onClick={action} loading={loading}>
                        {React.createElement(icon!, { variant: 'outlined', size: 'small', color: 'text' })}
                    </SdButton>
                ) : null}
            </div>
            {children}
        </React.Fragment>
    );
}
