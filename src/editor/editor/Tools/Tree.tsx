import React from 'react';
import { Puck } from '@measured/puck';
import { useClassName } from '@digital-lib/core';
import { BaseTool } from '@digital-lib/react-digital-ui';

interface Props {
    renderToolName: (id: string) => string;
}

export default function Tree({ renderToolName }: Props) {
    const className = useClassName({}, 'Tree');

    return (
        <BaseTool title={renderToolName('tree')}>
            <div className={className}>
                <Puck.Outline />
            </div>
        </BaseTool>
    );
}
