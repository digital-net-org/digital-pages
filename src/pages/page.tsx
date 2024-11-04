import { Editor } from '@/editor';
import { type FrameModel, type RawFrameModel } from '@/models';
import { defaultPuckData } from '@/puck';
import React from 'react';
import { safeParse } from '@safari-digital/core';
import type { Data } from '@measured/puck';

export default function HomePage() {
    return (
        <Editor<FrameModel, RawFrameModel>
            api="frame"
            renderName={e => e?.name}
            renderPreview={e => <pre>{JSON.stringify(e?.data, null, 2)}</pre>}
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
            }>
            <div>Editor test</div>
        </Editor>
    );
}
