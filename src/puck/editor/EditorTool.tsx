import type { ValueOf } from '@safari-digital/core';
import { Box, Button, type Icon, Text } from '@safari-digital/digital-ui';
import React, { type PropsWithChildren } from 'react';
import useEditor from './useEditor';

export interface EditorToolAction {
    action: () => void | Promise<void>;
    icon: ValueOf<typeof Icon>;
}

export interface EditorToolProps extends PropsWithChildren {
    title: string;
    actions?: Array<EditorToolAction>;
}

export default function EditorTool({ children, title, actions }: EditorToolProps) {
    const { loading } = useEditor();

    return (
        <React.Fragment>
            <Box direction="row" justify="space-between" align="center" gap={1} fullWidth>
                <Text variant="caption">{title}</Text>
                <Box direction="row" gap={1}>
                    {actions?.map(({ action, icon }) => (
                        <Button variant="icon" onClick={action} loading={loading}>
                            {React.createElement(icon!, {
                                variant: 'outlined',
                                size: 'small',
                                color: 'text',
                            })}
                        </Button>
                    ))}
                </Box>
            </Box>
            {children}
        </React.Fragment>
    );
}
