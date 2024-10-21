import React, { type PropsWithChildren } from 'react';
import { Box, Button, type Icon, Text } from '@safari-digital/digital-ui';
import type { ValueOf } from '@/types';
import useEditor from './useEditor';

export interface EditorToolProps extends PropsWithChildren {
    title: string;
    action?: () => void | Promise<void>;
    icon?: ValueOf<typeof Icon>;
}

export default function EditorTool({ children, title, action, icon }: EditorToolProps) {
    const { loading } = useEditor();
    const hasAction = React.useMemo(() => action && icon, [action, icon]);

    return (
        <React.Fragment>
            <Box direction="row" justify="space-between" align="center" gap={1}>
                <Text variant="caption">{title}</Text>
                {hasAction ? (
                    <Button variant="icon" onClick={action} loading={loading}>
                        {React.createElement(icon!, { variant: 'outlined', size: 'small', color: 'text' })}
                    </Button>
                ) : null}
            </Box>
            {children}
        </React.Fragment>
    );
}
