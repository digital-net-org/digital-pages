import React from 'react';
import { Puck } from '@measured/puck';
import { Icon } from '@safari-digital/digital-ui';
import { defaultPuckConfig, defaultPuckData } from '@/puck';
import { Editor } from '@/editor';
import { type FrameModel, FrameModelHelper, type RawFrameModel } from '@/models';
import FrameTools from './components/Tools';
import FrameEditor from './components/FrameEditor';
import './styles.css';

export default function FramePage() {
    return (
        <Editor.Provider<FrameModel, RawFrameModel>
            api="frame"
            renderModelName={e => e?.name}
            onQuery={FrameModelHelper.fromRaw}
            onPatch={(patch, id) =>
                patch(id, {
                    data: JSON.stringify(defaultPuckData),
                })
            }
            onCreate={create => create(FrameModelHelper.getDefaultPayload())}
            tools={[
                {
                    key: 'components',
                    icon: Icon.DiamondIcon,
                    renderTool: <FrameTools.Components />,
                },
                {
                    key: 'tree',
                    icon: Icon.DiagramIcon,
                    renderTool: <FrameTools.Tree />,
                },
            ]}>
            <Puck data={defaultPuckData} config={defaultPuckConfig}>
                <FrameEditor />
            </Puck>
        </Editor.Provider>
    );
}
