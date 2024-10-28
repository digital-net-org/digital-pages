import { type Config, type Data, Puck } from '@measured/puck';
import { Box, useClassName, useProps } from '@safari-digital/digital-ui';
import React, { type PropsWithChildren } from 'react';
import { defaultPuckConfig, defaultPuckData } from '../config';
import { type EditorContextProps, EditorProvider } from './EditorContext';
import Tool from './Tool';
import Toolbar from './Toolbar';
import './Editor.styles.css';

export interface EditorProps extends PropsWithChildren<EditorContextProps> {
    data?: Data;
    config?: Config;
    onPublish?: () => void;
}

export default function Editor({ children, disabled, ...props }: EditorProps) {
    const className = useClassName({ disabled }, 'Editor');
    const { mapProps } = useProps({ disabled });

    React.useEffect(() => {
        // TODO: Should update internal state on props change
        console.log('EditorProps.config', props.config);
        console.log('EditorProps.data', props.data);
    }, [props.data, props.config]);

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
