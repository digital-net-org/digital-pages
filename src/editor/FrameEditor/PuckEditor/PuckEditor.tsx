import React from 'react';
import { type Data, Puck } from '@measured/puck';
import { Box, Loader } from '@digital-lib/react-digital-ui';
import type { FrameConfigModel, FrameModel } from '@/dto';
import { frameTools } from '../Tools';
import { useFrameUrlState } from '../useFrameUrlState';
import { useFrameConfig } from '../../FrameConfig';
import { PuckEditorHelper } from './PuckDataHelper';
import { PuckTool } from './PuckTool';
import './PuckEditor.styles.css';

export interface PuckEditorProps {
    isLoading: boolean;
    entity: FrameModel | undefined;
    onChange: (data: Data) => Promise<void> | void;
}

export function PuckEditor({ entity, isLoading, onChange }: PuckEditorProps) {
    const { configs, loadedConfig } = useFrameConfig();

    if (isLoading) {
        return <Loader size="large" />;
    }
    if (!entity || !loadedConfig) {
        return null;
    }
    return (
        <React.Fragment>
            {JSON.stringify(loadedConfig?.components.Box ?? {})}
            <Puck data={PuckEditorHelper.resolve(entity.data)} config={loadedConfig} onChange={onChange}>
                <PuckTool />
                <Box direction="row" fullHeight fullWidth>
                    <Puck.Preview />
                    <Puck.Fields />
                </Box>
            </Puck>
        </React.Fragment>
    );
}
