import React from 'react';
import {Puck} from '@measured/puck';
import {defaultPuckData, digitalPuckConfig} from '@/puck';
import {Editor} from '@/editor';
import {type FrameModel, FrameModelHelper} from '@/models';
import FrameEditor from './components/FrameEditor';
import tools from './components/Tools';
import './styles.css';

export default function FramePage() {
    return (
        <Editor.Provider<FrameModel>
            api="frame"
            renderModelName={e => e?.name}
            onPatch={(patch, id) => patch(id, {data: defaultPuckData})}
            onCreate={create => create(FrameModelHelper.getDefaultPayload())}
            tools={tools.map(({ tool }) => tool)}>
            <Puck data={defaultPuckData} config={digitalPuckConfig}>
                <FrameEditor />
            </Puck>
        </Editor.Provider>
    );
}
