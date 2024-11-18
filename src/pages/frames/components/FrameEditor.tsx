import React from 'react';
import { safeParse } from '@safari-digital/core';
import { Icon } from '@safari-digital/digital-ui';
import { type Data, usePuck } from '@measured/puck';
import { defaultPuckData } from '@/puck';
import { Editor } from '@/editor';
import { type FrameModel, type RawFrameModel } from '@/models';
import FramePreview from './FramePreview';
import FrameTools from './Tools';
import FrameEdit from './FrameEdit';
import FrameRender from './FrameRender';

export default function FrameEditor() {
    const { dispatch } = usePuck();
    // TODO: Find the correct way to handle this
    const handleSelect = (data: Data) => dispatch({ type: 'setData', data });

    return (
        <Editor<FrameModel, RawFrameModel>
            api="frame"
            renderName={e => e?.name}
            renderPreview={e => <FramePreview {...e} />}
            onQuery={({ data, ...frame }) => ({
                ...frame,
                data: safeParse(data) as Data,
            })}
            onPatch={(patch, id) =>
                patch(id, {
                    data: JSON.stringify(defaultPuckData),
                })
            }
            onCreate={create =>
                create({
                    data: JSON.stringify(defaultPuckData),
                    name: 'xxxx-xxxx-xxxx-xxxx'.replace(/[xy]/g, c => {
                        const r = (Math.random() * 16) | 0;
                        const v = c === 'x' ? r : (r & 0x3) | 0x8;
                        return v.toString(16);
                    }),
                })
            }
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
            <FrameEdit />
            <FrameRender />
        </Editor>
    );
}
