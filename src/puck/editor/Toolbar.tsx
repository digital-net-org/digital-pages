import { Box, Button, useClassName, type ButtonProps } from '@safari-digital/digital-ui';
import React, { type PropsWithChildren } from 'react';
import { type Action } from './types';
import './Toolbar.styles.css';

export interface ToolbarProps extends PropsWithChildren {
    disabled?: boolean;
    actions: Array<Action & { selected?: ButtonProps['selected'] }>;
    orientation?: 'horizontal' | 'vertical';
}

export default function Toolbar(props: ToolbarProps) {
    const className = useClassName({ ...props, column: props.orientation == 'vertical' }, 'Editor-toolbar');

    return (
        <Box className={className} gap={1} p={1}>
            <Box className="Editor-toolbar-content" gap={1}>
                {props.children}
            </Box>
            <Box className="Editor-toolbar-actions" gap={1}>
                {props.actions.map(({ key, alwaysEnabled, separator, ...action }) => (
                    <React.Fragment key={key}>
                        <Button variant="icon" disabled={props.disabled && !alwaysEnabled} {...action} />
                        {separator && <Box className="Editor-toolbar-separator" />}
                    </React.Fragment>
                ))}
            </Box>
        </Box>
    );
}
