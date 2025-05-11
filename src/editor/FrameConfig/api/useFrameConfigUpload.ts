import React from 'react';
import { useDigitalMutation } from '@digital-lib/react-digital-client';
import type { Result } from '@digital-lib/dto';
import type { FrameConfigModel } from '@/dto';
import { FrameConfigApi } from './FrameConfigApi';
import type { FrameConfigCallbacks } from './types';

export interface FrameConfigPayload {
    version?: string;
    file?: File;
}

export function useFrameConfigUpload({ onError, onSuccess }: FrameConfigCallbacks) {
    const { mutate: create, isPending } = useDigitalMutation<Result<FrameConfigModel>>(`${FrameConfigApi.api}/upload`, {
        method: 'POST',
        headers: {
            'Content-Type': 'multipart/form-data',
        },
        onError,
        onSuccess: () => {
            FrameConfigApi.InvalidateApi();
            onSuccess?.();
        },
    });

    const upload = React.useCallback(
        (payload: FrameConfigPayload) => {
            if (!payload.version || !payload.file) {
                console.error('FrameConfig: Upload: Form state is undefined');
                return;
            }

            const form = new FormData();
            for (const [key, value] of Object.entries(payload)) {
                form.append(key, value);
            }
            create({ body: form });
        },
        [create]
    );

    return { upload, isPending };
}
