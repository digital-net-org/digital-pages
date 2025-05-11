import React, { type PropsWithChildren } from 'react';
import { Box, Text } from '@digital-lib/react-digital-ui';
import FrameEditorHelper from '../FrameEditorHelper';

export interface BaseToolProps {
    title?: string | React.ReactNode;
}

export const baseToolClassName = `${FrameEditorHelper.className}-Tool`;

export function BaseTool({ children, title }: PropsWithChildren<BaseToolProps>) {
    return (
        <Box className={baseToolClassName} fullHeight overflow="hidden">
            <Box direction="row" justify="space-between" align="center" gap={1} fullWidth>
                <Box p={1}>{typeof title === 'string' ? <Text variant="caption">{title}</Text> : title}</Box>
            </Box>
            <Box className={`${baseToolClassName}-Render`} p={1} fullWidth fullHeight>
                {children}
            </Box>
        </Box>
    );
}
