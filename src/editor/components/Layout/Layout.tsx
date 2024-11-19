import React, { type PropsWithChildren } from 'react';
import { Box, useClassName, useProps } from '@safari-digital/digital-ui';
import { useChildren } from '@/utils';
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
        <Box className={className} direction="row" fullWidth fullHeight>
            {mapByType(Toolbar, null, { disabled })}
            <Box fullWidth fullHeight>
                {mapByType(ActionBar, null, { disabled })}
                <Box direction="row" fullWidth fullHeight>
                    {selectedTool
                        ? mapProps(<div className="Editor-tool">{selectedTool.renderTool}</div>)
                        : null}
                    {isDefaultTool && selectedModel ? mapByType(Preview) : null}
                    {!isDefaultTool && selectedModel ? mapByType(ToolRender, selectedTool?.key) : null}
                </Box>
            </Box>
        </Box>
    );
}
