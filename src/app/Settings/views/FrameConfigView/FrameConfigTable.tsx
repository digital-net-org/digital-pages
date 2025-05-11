import React from 'react';
import { Localization, useToaster } from '@digital-lib/react-digital';
import { Table } from '@digital-lib/react-digital-ui';
import { useFrameConfig, useFrameConfigDelete } from '@/editor';
import { FrameConfigForm } from './FrameConfigForm';

export function FrameConfigTable() {
    const { toast } = useToaster();

    const [open, setOpen] = React.useState(false);
    const { configs, isLoading } = useFrameConfig();
    const { deleteConfig, isDeleting } = useFrameConfigDelete({
        onSuccess: () => toast('settings:frame.actions.delete.success', 'success'),
        onError: ({ status }) => toast(`settings:frame.actions.delete.error.${status}`, 'error'),
    });

    return (
        <React.Fragment>
            <FrameConfigForm open={open} onClose={() => setOpen(false)} />
            <Table
                onCreate={() => setOpen(true)}
                onDelete={id => deleteConfig(id)}
                entities={configs}
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
                loading={isLoading}
                loadingActions={isDeleting}
                renderEmpty={() => Localization.translate('settings:frame.result.empty')}
            />
        </React.Fragment>
    );
}
