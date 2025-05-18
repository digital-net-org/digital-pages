import React from 'react';
import { type Data, Puck } from '@measured/puck';
import { Box, Loader } from '@digital-lib/react-digital-ui';
import type { FrameConfigModel, FrameModel } from '@/dto';
import { frameTools } from '../Tools';
import { useFrameUrlState } from '../useFrameUrlState';
import { PuckEditorHelper } from './PuckDataHelper';
import './PuckEditor.styles.css';
import { PuckTool } from '@/editor/FrameEditor/PuckEditor/PuckTool';
import { useFrameConfig } from '@/editor';

export interface PuckEditorProps {
    isLoading: boolean;
    entity: FrameModel | undefined;
    onChange: (data: Data) => Promise<void> | void;
}

export function PuckEditor({ entity, isLoading, onChange }: PuckEditorProps) {
    const { configs } = useFrameConfig();
    const currentConfig = React.useMemo(() => configs.find(c => c.id === entity?.configId), [configs, entity]);
    if (isLoading) {
        return <Loader size="large" />;
    }
    if (!entity) {
        return null;
    }
    return (
        <Puck data={PuckEditorHelper.resolve(entity.data)} config={{ components: {} }} onChange={onChange}>
            {JSON.stringify(currentConfig ?? {})}
            <PuckTool />
            <Box direction="row" fullHeight fullWidth>
                <Puck.Preview />
                <Puck.Fields />
            </Box>
        </Puck>
    );
}
