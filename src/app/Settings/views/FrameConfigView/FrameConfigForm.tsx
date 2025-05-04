import React from 'react';
import type { Result } from '@digital-lib/dto';
import { Localization, useToaster } from '@digital-lib/react-digital';
import { type DialogProps, Dialog, Form, InputText, InputFile, Button, Text, Box } from '@digital-lib/react-digital-ui';
import { DigitalClient, useDigitalMutation } from '@digital-lib/react-digital-client';
import type { FrameConfigModel } from '@/dto';
import { frameConfigApi } from './config';

export interface FrameConfigFormProps {
    open: DialogProps['open'];
    onClose: DialogProps['onClose'];
    loading?: DialogProps['loading'];
}

export default function FrameConfigForm({ onClose, ...dialogProps }: FrameConfigFormProps) {
    const { toast } = useToaster();

    const { mutate: create, isPending } = useDigitalMutation<Result<FrameConfigModel>>(`${frameConfigApi}/upload`, {
        method: 'POST',
        headers: {
            'Content-Type': 'multipart/form-data',
        },
        onError: ({ status }) => toast(`settings:frame.actions.create.error.${status}`, 'error'),
        onSuccess: () => {
            toast('settings:frame.actions.create.success', 'success');
            DigitalClient.invalidate(frameConfigApi);
            handleClose();
        },
    });

    const [formState, setFormState] = React.useState<{ version?: string; file?: File }>({});
    const setFile = (v: Array<File> | undefined) => setFormState(prev => ({ ...prev, file: v?.[0] }));
    const setVersion = (v: string | undefined) => setFormState(prev => ({ ...prev, version: v }));

    const handleClose = React.useCallback(() => {
        setFormState({});
        onClose?.();
    }, [onClose]);

    const handleSubmit = React.useCallback(() => {
        if (!formState.version || !formState.file) {
            console.error('FrameConfigForm: Form state is undefined');
            return;
        }
        const form = new FormData();
        for (const [key, value] of Object.entries(formState)) {
            form.append(key, value);
        }
        create({ body: form });
    }, [create, formState]);

    return (
        <Dialog onClose={handleClose} {...dialogProps}>
            <Dialog.Header>{Localization.translate(`settings:frame.actions.create.label`)}</Dialog.Header>
            <Dialog.Content>
                <Form id="create-version-form" onSubmit={handleSubmit} gap={2} align="end">
                    <InputText
                        type="text"
                        help={Localization.translate('settings:frame.actions.create.form.version:pattern')}
                        value={formState.version ?? ''}
                        onChange={setVersion}
                        label={Localization.translate('settings:frame.actions.create.form.version:label')}
                        loading={isPending}
                        pattern="^[A-Za-z0-9._\-]{3,24}$"
                        focusOnMount
                        required
                    />
                    <InputFile
                        value={formState.file ? [formState.file] : []}
                        onChange={setFile}
                        label={Localization.translate('settings:frame.actions.create.form.file:label')}
                        accept={['application/javascript', 'text/javascript', 'application/x-javascript']}
                        required
                    />
                    <Button disabled={!formState.file} loading={isPending}>
                        {Localization.translate('global:actions.import')}
                    </Button>
                </Form>
            </Dialog.Content>
        </Dialog>
    );
}
