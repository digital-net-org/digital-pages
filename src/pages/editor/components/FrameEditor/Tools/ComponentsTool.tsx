import React from 'react';
import { Puck } from '@measured/puck';
import { BaseTool, baseToolClassName } from './BaseTool';
import { Localization } from '@digital-lib/react-digital';

export function ComponentsTool() {
    return (
        <BaseTool title={Localization.translate('frame-editor:tools.components.title')}>
            <div className={`${baseToolClassName}-Components`}>
                <Puck.Components />
            </div>
        </BaseTool>
    );
}
