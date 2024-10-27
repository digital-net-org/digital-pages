import React, { type PropsWithChildren } from 'react';
import { type Config, type Data, Puck } from '@measured/puck';
import { Box, useClassName, useProps } from '@safari-digital/digital-ui';
import { type EditorContextProps, EditorProvider } from './EditorContext';
import { defaultPuckConfig, defaultPuckData } from './config';
import Toolbar from './Toolbar';
import Tool from './Tool';
import './Editor.styles.css';

export interface EditorProps extends PropsWithChildren<EditorContextProps> {
    data?: Data;
    config?: Config;
    onPublish?: () => void;
}

export default function Editor({ children, disabled, ...props }: EditorProps) {
    const className = useClassName({ disabled }, 'Editor');
    const { mapProps } = useProps({ disabled });
    return (
        <EditorProvider {...props}>
            <Puck data={props.data ?? defaultPuckData} config={props.config ?? defaultPuckConfig}>
                <Box className={className} direction="row" fullWidth fullHeight>
                    {mapProps(<Toolbar />)}
                    {mapProps(<Tool />)}
                    {mapProps(children)}
                </Box>
            </Puck>
        </EditorProvider>
    );
}
