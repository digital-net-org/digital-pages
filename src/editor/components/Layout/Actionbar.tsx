import { Box, Button, useProps } from '@safari-digital/digital-ui';
import React from 'react';
import type { EditorState } from '../../types';
import defaultActions from '../../context/defaultActions';

export default function ActionBar({ disabled, actions, renderName, selectedModel, ...props }: EditorState) {
    const { mapProps } = useProps({ disabled });

    return (
        <div className="Editor-toolbar Editor-toolbar-xaxis">
            <Box>{selectedModel ? (renderName?.(selectedModel) ?? selectedModel.id) : null}</Box>
            <div className="Editor-toolbar-actions">
                {mapProps(
                    actions.map(({ onClick, icon, key }, i) => (
                        <React.Fragment key={key}>
                            <Button
                                variant="icon"
                                disabled={disabled || selectedModel === undefined}
                                onClick={() => onClick(selectedModel, props)}>
                                {React.createElement(icon, {
                                    variant: 'outlined',
                                    size: 'small',
                                    color: 'text',
                                })}
                            </Button>
                            {i + 1 >= defaultActions.length && actions[i + 1] !== undefined ? (
                                <Box className="Editor-toolbar-separator" />
                            ) : null}
                        </React.Fragment>
                    )),
                )}
            </div>
        </div>
    );
}
