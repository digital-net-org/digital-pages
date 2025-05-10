import React from 'react';
import { useDigitalQuery } from '@digital-lib/react-digital-client';
import { useToaster, useUser } from '@digital-lib/react-digital';
import type { Result } from '@digital-lib/dto';
import { PagesErrorCode } from '@/dto';
import { FrameConfigHelper } from './Settings';

export interface PagesAppState {
    isConfigUploaded?: boolean;
}

export const PagesAppContext = React.createContext<PagesAppState>({
    isConfigUploaded: undefined,
});

export function PagesAppProvider({ children }: React.PropsWithChildren<{}>) {
    const { toast } = useToaster();
    const { isLogged } = useUser();
    const [isConfigUploaded, setIsConfigUploaded] = React.useState<boolean>();

    useDigitalQuery<Result>(isLogged ? FrameConfigHelper.testApi : undefined, {
        onSuccess: () => setIsConfigUploaded(true),
        onError: ({ errors }) => {
            if (errors.find(e => e.reference === PagesErrorCode.NoFrameConfig) !== undefined) {
                setIsConfigUploaded(false);
                return;
            }
            toast('pages-app:errors.noFrameValidation.unhandled', 'error');
        },
    });

    return <PagesAppContext.Provider value={{ isConfigUploaded }}>{children}</PagesAppContext.Provider>;
}
