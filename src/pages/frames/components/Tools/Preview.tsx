import React from 'react';
import { useEditor } from '@/editor';
import { Puck } from '@measured/puck';
import { Box } from '@safari-digital/digital-ui';

interface PreviewProps {
    interactive?: boolean;
}

export default function Preview({ interactive }: PreviewProps) {
    const { selectedModel } = useEditor();
    return interactive
        ? (
                <Box direction="row" fullHeight fullWidth>
                    <Puck.Preview />
                    <Puck.Fields />
                </Box>
            )
        : (
                <Box>
                    <h4>View Config</h4>
                    <pre>{JSON.stringify(selectedModel, null, 2)}</pre>
                </Box>
            );
}
