import React from 'react';
import { Puck } from '@measured/puck';

export default function FrameRender() {
    return (
        <div className="FrameEditor-render">
            <Puck.Preview />
        </div>
    );
}
