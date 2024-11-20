import React from 'react';
import { t } from 'i18next';
import { Puck } from '@measured/puck';
import { Tool } from '@/editor';

export default function TreeTool() {
    return (
        <Tool title={t('editor:tools.tree.title')}>
            <div className="FrameEditor-tools-tree">
                <Puck.Outline />
            </div>
        </Tool>
    );
}
