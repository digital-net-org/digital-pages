import type { ValueOf } from '@safari-digital/core';
import { Box, Button, type Icon, Text } from '@safari-digital/digital-ui';
import React, { type PropsWithChildren } from 'react';
import useEditor from '../useEditor';

export interface ToolProps extends PropsWithChildren {
    title: string;
    actions?: Array<{
        action: () => void | Promise<void>;
        icon: ValueOf<typeof Icon>;
    }>;
}

export default function Tool({ children, title, actions }: ToolProps) {
    const { isLoading } = useEditor();
    return (
        <React.Fragment>
            <Box direction="row" justify="space-between" align="center" gap={1} fullWidth>
                <Text variant="caption">{title}</Text>
                <Box direction="row" gap={1}>
                    {actions?.map(({ action, icon }) => (
                        <Button variant="icon" onClick={action} loading={isLoading}>
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
