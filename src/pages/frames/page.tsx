import React from 'react';
import { Puck } from '@measured/puck';
import { defaultPuckConfig, defaultPuckData } from '@/puck';
import { Editor } from '@/editor';
import { type FrameModel, FrameModelHelper, type RawFrameModel } from '@/models';
import FrameEditor from './components/FrameEditor';
import tools from './components/Tools';
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
            tools={tools.map(({ tool }) => tool)}>
            <Puck data={defaultPuckData} config={defaultPuckConfig}>
                <FrameEditor />
            </Puck>
        </Editor.Provider>
    );
}
