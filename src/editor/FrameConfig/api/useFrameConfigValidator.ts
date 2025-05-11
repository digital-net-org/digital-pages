import React from 'react';
import { useToaster, useUser } from '@digital-lib/react-digital';
import { useDigitalQuery } from '@digital-lib/react-digital-client';
import type { Result } from '@digital-lib/dto';
import { PagesErrorCode } from '@/dto';
import { FrameConfigApi } from './FrameConfigApi';

export function useFrameConfigValidator() {
    const { toast } = useToaster();
    const { isLogged } = useUser();
    const [isConfigUploaded, setIsConfigUploaded] = React.useState<boolean>();

    const { isLoading: isValidating } = useDigitalQuery<Result>(FrameConfigApi.testApi, {
        onSuccess: () => setIsConfigUploaded(true),
        onError: ({ errors }) => {
            if (errors.find(e => e.reference === PagesErrorCode.NoFrameConfig) !== undefined) {
                setIsConfigUploaded(false);
                return;
            }
            toast('pages-app:errors.noFrameValidation.unhandled', 'error');
        },
        trigger: isLogged,
    });

    return { isConfigUploaded, isValidating };
}
