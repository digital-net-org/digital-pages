import React from 'react';
import type { FrameConfigModel } from '@/dto';
import { Localization, useToaster } from '@digital-lib/react-digital';
import { DigitalClient, useDelete, useGet } from '@digital-lib/react-digital-client';
import { Table } from '@digital-lib/react-digital-ui';
import { FrameConfigForm } from './FrameConfigForm';
import { FrameConfigHelper } from './FrameConfigHelper';

export function FrameConfigTable() {
    const { toast } = useToaster();

    const [open, setOpen] = React.useState(false);
    const { entities, isQuerying } = useGet<FrameConfigModel>(FrameConfigHelper.api);
    const { delete: deleteEntity, isDeleting } = useDelete(FrameConfigHelper.api, {
        onSuccess: () => {
            toast('settings:frame.actions.delete.success', 'success');
            FrameConfigHelper.InvalidateApi();
        },
        onError: ({ status }) => toast(`settings:frame.actions.delete.error.${status}`, 'error'),
    });

    return (
        <React.Fragment>
            <FrameConfigForm open={open} onClose={() => setOpen(false)} />
            <Table
                onCreate={() => setOpen(true)}
                onDelete={id => deleteEntity(id)}
                entities={entities}
                columns={['id', 'version', 'createdAt']}
                renderHeader={key => Localization.translate(`settings:frame.result.headers.${key}`)}
                renderRow={(key, row) => {
                    if (key === 'document') {
                        return <React.Fragment>{row.document?.fileName}</React.Fragment>;
                    }
                    if (key === 'createdAt') {
                        return <React.Fragment>{row.createdAt?.toLocaleString()}</React.Fragment>;
                    }
                }}
                loading={isQuerying}
                loadingActions={isDeleting}
                renderEmpty={() => Localization.translate('settings:frame.result.empty')}
            />
        </React.Fragment>
    );
}
