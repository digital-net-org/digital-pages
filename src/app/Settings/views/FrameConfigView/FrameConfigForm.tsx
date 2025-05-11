import React from 'react';
import { Localization, useToaster } from '@digital-lib/react-digital';
import { type DialogProps, Dialog, Form, InputText, InputFile, Button } from '@digital-lib/react-digital-ui';
import { type FrameConfigPayload, useFrameConfigUpload } from '@/editor';

export interface FrameConfigFormProps {
    open: DialogProps['open'];
    onClose: DialogProps['onClose'];
    loading?: DialogProps['loading'];
}

export function FrameConfigForm({ onClose, ...dialogProps }: FrameConfigFormProps) {
    const { toast } = useToaster();
    const { upload, isPending } = useFrameConfigUpload({
        onError: ({ status }) => toast(`settings:frame.actions.create.error.${status}`, 'error'),
        onSuccess: () => {
            toast('settings:frame.actions.create.success', 'success');
            handleClose();
        },
    });

    const [formState, setFormState] = React.useState<FrameConfigPayload>({});
    const setFile = (v: Array<File> | undefined) => setFormState(prev => ({ ...prev, file: v?.[0] }));
    const setVersion = (v: string | undefined) => setFormState(prev => ({ ...prev, version: v }));

    const handleClose = React.useCallback(() => {
        setFormState({});
        onClose?.();
    }, [onClose]);

    const handleSubmit = React.useCallback(() => upload(formState), [formState, upload]);

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
