import React from 'react';
import { type Data, Puck } from '@measured/puck';
import { Box, Loader } from '@digital-lib/react-digital-ui';
import type { FrameConfigModel, FrameModel } from '@/dto';
import { frameTools } from '../Tools';
import { useFrameUrlState } from '../useFrameUrlState';
import PuckEditorHelper from './PuckDataHelper';
import './PuckEditor.styles.css';

export interface PuckEditorProps {
    isLoading: boolean;
    entity: FrameModel | undefined;
    config: FrameConfigModel | undefined;
    onChange: (data: Data) => Promise<void> | void;
}

export function PuckEditor({ entity, config, isLoading, onChange }: PuckEditorProps) {
    const { currentTool } = useFrameUrlState();
    const renderCurrentTool = React.useCallback(() => {
        const component = frameTools.find(t => t.id === currentTool?.id)?.component;
        return component ? React.createElement(component) : null;
    }, [currentTool]);

    if (isLoading) {
        return <Loader size="large" />;
    }
    if (!entity) {
        return null;
    }
    return (
        <Puck data={PuckEditorHelper.resolve(entity.data)} config={{ components: {} }} onChange={onChange}>
            {renderCurrentTool()}
            <Box direction="row" fullHeight fullWidth>
                <Puck.Preview />
                <Puck.Fields />
            </Box>
        </Puck>
    );
}
