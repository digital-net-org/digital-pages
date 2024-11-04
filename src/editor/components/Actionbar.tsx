import useEditor from '@/editor/useEditor';
import { Box, Button, useProps } from '@safari-digital/digital-ui';
import React from 'react';
import { type Action } from '../types';
import { type EntityBase } from '@/models';

interface ActionBarProps {
    disabled?: boolean;
}

export default function ActionBar({ disabled }: ActionBarProps) {
    const { mapProps } = useProps({ disabled });
    const { actions, renderName, selected } = useEditor<EntityBase>();

    const renderActions = (actions: Action[]) =>
        mapProps(
            actions.map(action => (
                <Button variant="icon" disabled={disabled} {...action}>
                    {React.createElement(action.icon, {
                        variant: 'outlined',
                        size: 'small',
                        color: 'text',
                    })}
                </Button>
            )),
        );

    return (
        <Box
            className="Editor-toolbar"
            fullWidth
            align="center"
            justify="space-between"
            direction="row"
            p={1}>
            <Box>{selected ? (renderName?.(selected) ?? selected.id) : null}</Box>
            <Box className="Editor-toolbar-actions" direction="row" gap={1}>
                <Box className="Editor-toolbar-separator" />
                {renderActions(actions)}
            </Box>
        </Box>
    );
}
