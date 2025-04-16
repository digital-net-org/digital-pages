import React from 'react';
import type { FrameConfigModel } from '@/dto';
import { useGet, useGetById } from '@digital-lib/react-digital-client';
import { Box, Loader, Table, Text } from '@digital-lib/react-digital-ui';
import { frameConfigApi } from './config';
import FrameConfigForm from './FrameConfigForm';
import { Localization } from '@digital-lib/react-digital';

export default function FrameConfigTable() {
    const [selectedId, setSelectedId] = React.useState<FrameConfigModel['id']>();
    const [open, setOpen] = React.useState(false);

    const { entities, isQuerying } = useGet<FrameConfigModel>(frameConfigApi);
    const { entity: selected, isQuerying: isSelectedQuerying } = useGetById<FrameConfigModel>(
        frameConfigApi,
        selectedId
    );

    return (
        <React.Fragment>
            <FrameConfigForm
                entity={selected}
                loading={isSelectedQuerying}
                open={open}
                onClose={() => {
                    setOpen(false);
                    setSelectedId(undefined);
                }}
            />
            {isQuerying || entities.length === 0 ? (
                <Box fullWidth mt={3} align="center" justify="center">
                    {isQuerying ? (
                        <Loader size="large" />
                    ) : (
                        <Text>{Localization.translate('settings:frame.result.empty')}</Text>
                    )}
                </Box>
            ) : (
                <Table
                    entities={entities}
                    loading={isQuerying}
                    onEdit={id => {
                        setSelectedId(id);
                        setOpen(true);
                    }}
                />
            )}
        </React.Fragment>
    );
}
