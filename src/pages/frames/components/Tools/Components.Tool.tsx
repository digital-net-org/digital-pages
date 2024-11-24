import React from 'react';
import { t } from 'i18next';
import { Puck } from '@measured/puck';
import { Tool } from '@/editor';

export default function ComponentsTool() {
    return (
        <Tool title={t('frames_editor:tools.components.title')}>
            <div className="FrameEditor-tools-components">
                <Puck.Components />
            </div>
        </Tool>
    );
}
