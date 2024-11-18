import React from 'react';
import { type Data, Puck } from '@measured/puck';

interface EditProps {
    data?: Data | undefined;
}

export default function FrameEdit(props: EditProps) {
    return (
        <div className="FrameEditor-edit">
            <Puck.Fields />
        </div>
    );
}
