import React from 'react';
import { Puck } from '@measured/puck';
import { BaseTool, baseToolClassName } from './BaseTool';
import { Localization } from '@digital-lib/react-digital';

export function TreeTool() {
    return (
        <BaseTool title={Localization.translate('frame-editor:tools.tree.title')}>
            <div className={`${baseToolClassName}-Tree`}>
                <Puck.Outline />
            </div>
        </BaseTool>
    );
}
