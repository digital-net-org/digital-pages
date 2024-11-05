import { Box, useClassName, useProps } from '@safari-digital/digital-ui';
import React, { type PropsWithChildren } from 'react';
import ActionBar from './Actionbar';
import Toolbar from './Toolbar';
import { type EditorState } from '../../types';

interface LayoutProps extends PropsWithChildren, EditorState {}

export default function Layout({
    disabled,
    renderPreview,
    selectedTool,
    selectModel,
    children,
}: LayoutProps) {
    const className = useClassName({ disabled }, 'Editor');
    const { mapProps } = useProps({ disabled });

    const getChild = React.useCallback(
        (type: React.ElementType) =>
            React.Children.toArray(children).find(c => React.isValidElement(c) && c.type === type),
        [children],
    );

    return (
        <Box className={className} direction="row" fullWidth fullHeight>
            {mapProps(getChild(Toolbar))}
            <Box fullWidth fullHeight>
                {mapProps(getChild(ActionBar))}
                <Box direction="row" fullWidth fullHeight>
                    {mapProps(
                        selectedTool ? <div className="Editor-tool">{selectedTool.renderTool}</div> : null,
                    )}
                    {renderPreview?.(selectModel) ?? null}
                    {/*{mapProps(children)}*/}
                </Box>
            </Box>
        </Box>
    );
}
