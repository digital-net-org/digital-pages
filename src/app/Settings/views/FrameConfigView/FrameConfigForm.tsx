import React from 'react';
import type { Result } from '@digital-lib/dto';
import { Localization } from '@digital-lib/react-digital';
import { type DialogProps, Dialog, Form, InputText } from '@digital-lib/react-digital-ui';

import { useDigitalMutation } from '@digital-lib/react-digital-client';
import type { FrameConfigModel } from '@/dto';
import { frameConfigApi } from './config';

export interface FrameConfigFormProps {
    entity?: FrameConfigModel;
    open: DialogProps['open'];
    onClose: DialogProps['onClose'];
    loading: DialogProps['loading'];
}

export default function FrameConfigForm({ entity, ...dialogProps }: FrameConfigFormProps) {
    const reference = React.useMemo(() => `settings:frame.label.actions.${!entity ? 'create' : 'consult'}`, [entity]);
    const [formState, setFormState] = React.useState({
        version: entity?.version,
    });

    React.useEffect(
        () => (entity?.version ? setFormState(prev => ({ ...prev, version: entity.version })) : void 0),
        [entity]
    );

    const { mutate: create, isPending } = useDigitalMutation<Result<FrameConfigModel>>(frameConfigApi, {
        method: 'POST',
    });

    const handleSubmit = React.useCallback(() => {
        if (entity) {
            return;
        }
        const form = new FormData();
        form.set('version', formState.version ?? '');
        // form.set('file', '');
    }, [entity, formState]);

    return (
        <Dialog {...dialogProps}>
            <Dialog.Header>{Localization.translate(reference)}</Dialog.Header>
            <Dialog.Content>
                <Form id={`${reference}-id`} onSubmit={handleSubmit}>
                    <InputText
                        type="text"
                        value={formState.version}
                        onChange={v => setFormState(prev => ({ ...prev, version: v }))}
                        label={Localization.translate('settings:frame.label.actions.form.version')}
                        loading={isPending}
                        disabled={Boolean(entity)}
                        required={!entity}
                        focusOnMount={!entity}
                    />
                </Form>
            </Dialog.Content>
        </Dialog>
    );
}
