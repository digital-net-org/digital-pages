import React, { type PropsWithChildren } from 'react';
import { Box } from '@digital-net/react-ui';
import { useClassName, useProps, useChildren } from '@digital-net/react-elements';
import { type EditorState } from '../../types';
import { defaultToolKey } from '../../defaultTools';
import ActionBar from './Actionbar';
import Preview from './Preview';
import Toolbar from './Toolbar';
import ToolRender from './ToolRender';

interface LayoutProps extends PropsWithChildren, EditorState {}

export default function Layout({ disabled, selectedTool, selectedModel, children }: LayoutProps) {
    const className = useClassName({ disabled }, 'Editor');
    const { mapProps } = useProps({ disabled });
    const { mapByType } = useChildren(children);

    const isDefaultTool = React.useMemo(() => selectedTool?.key === defaultToolKey, [selectedTool]);

    return (
        <Box className={className}>
            {mapByType(Toolbar, null, { disabled })}
            <Box className="Editor-wrapper">
                {mapByType(ActionBar, null, { disabled })}
                <Box className="Editor-render">
                    {selectedTool ? mapProps(<div className="Editor-tool">{selectedTool.render}</div>) : null}
                    {isDefaultTool && selectedModel ? mapByType(Preview) : null}
                    {!isDefaultTool && selectedModel ? mapByType(ToolRender, selectedTool?.key) : null}
                </Box>
            </Box>
        </Box>
    );
}
