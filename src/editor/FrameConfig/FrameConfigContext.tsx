import React from 'react';
import { useGet } from '@digital-lib/react-digital-client';
import type { FrameConfigModel } from '@/dto';
import { FrameConfigApi } from '@/editor';
import { useFrameConfigValidator } from './api/useFrameConfigValidator';
import { useUser } from '@digital-lib/react-digital';

export interface FrameConfigState {
    configs: Array<FrameConfigModel>;
    isConfigUploaded?: boolean;
    isLoading: boolean;
    isValidating: boolean;
}

export const FrameConfigContext = React.createContext<FrameConfigState>({
    isConfigUploaded: undefined,
    configs: [],
    isLoading: false,
    isValidating: true,
});

export function FrameConfigProvider({ children }: React.PropsWithChildren<{}>) {
    const { isLogged } = useUser();

    const { isConfigUploaded, isValidating } = useFrameConfigValidator();
    const { entities: configs, isQuerying } = useGet<FrameConfigModel>(FrameConfigApi.api, { trigger: isLogged });

    const isLoading = React.useMemo(() => isQuerying, [isQuerying]);

    return (
        <FrameConfigContext.Provider
            value={{
                isConfigUploaded,
                configs: configs ?? [],
                isLoading,
                isValidating: isValidating || isConfigUploaded === undefined,
            }}
        >
            {children}
        </FrameConfigContext.Provider>
    );
}
