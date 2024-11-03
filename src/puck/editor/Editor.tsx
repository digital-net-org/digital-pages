import { type Config, type Data, Puck } from '@measured/puck';
import { Box, useClassName, useProps } from '@safari-digital/digital-ui';
import React, { type PropsWithChildren } from 'react';
import { defaultPuckConfig, defaultPuckData } from '../config';
import { type EditorContextProps, EditorProvider } from './EditorContext';
import Tool from './Tool';
import Toolbar from './Toolbar';
import useEditor from './useEditor';
import './Editor.styles.css';

export interface EditorProps extends PropsWithChildren<EditorContextProps> {
    data?: Data;
    config?: Config;
    onPublish?: () => void;
    renderStatus?: React.ReactNode;
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
                    {mapProps(<Tools />)}
                    <Box direction="column" fullWidth fullHeight>
                        {mapProps(<Actions {...props} />)}
                        <Box direction="row" fullWidth fullHeight>
                            {mapProps(<Tool />)}
                            {mapProps(children)}
                        </Box>
                    </Box>
                </Box>
            </Puck>
        </EditorProvider>
    );
}

function Tools(props: { disabled?: boolean }) {
    const { tools, activeTool, setActiveTool } = useEditor();

    React.useEffect(
        () => (tools?.length > 0 && !activeTool ? setActiveTool(tools[0].key) : void 0),
        [tools, activeTool, setActiveTool],
    );

    const actions = React.useMemo(
        () =>
            tools.map(tool => ({
                ...tool,
                selected: tool.key === activeTool?.key,
                onClick: () => setActiveTool(tool.key),
                disabled: props.disabled && !tool.alwaysEnabled,
                children: React.createElement(tool.icon, { variant: 'filled', size: 'small' }),
            })),
        [tools, activeTool, setActiveTool, props.disabled],
    );

    return <Toolbar actions={actions} disabled={props.disabled} orientation="vertical" />;
}

function Actions(props: { disabled?: boolean; renderStatus?: React.ReactNode }) {
    const { actions } = useEditor();
    return (actions && actions.length) || props.renderStatus ? (
        <Toolbar actions={actions ?? []} disabled={props.disabled}>
            {props.renderStatus}
        </Toolbar>
    ) : null;
}
