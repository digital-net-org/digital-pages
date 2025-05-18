import React from 'react';
import type { Config } from '@measured/puck';
import { useGet, useDigitalImport } from '@digital-lib/react-digital-client';
import { useToaster, useUser } from '@digital-lib/react-digital';
import { EntityHelper } from '@digital-lib/dto';
import type { FrameConfigModel } from '@/dto';
import { FrameConfigApi } from '@/editor';
import { useFrameConfigValidator } from './api/useFrameConfigValidator';

export interface FrameConfigState {
    isConfigUploaded?: boolean;
    configs: Array<FrameConfigModel>;
    loadedConfig?: Config;
    loadConfig: (version: Version) => void;
    isLoading: boolean;
    isValidating: boolean;
}

export const FrameConfigContext = React.createContext<FrameConfigState>({
    isConfigUploaded: undefined,
    configs: [],
    isLoading: false,
    isValidating: true,
    loadConfig: () => void 0,
});

type Version = FrameConfigModel['version'];

export function FrameConfigProvider({ children }: React.PropsWithChildren<{}>) {
    const { isLogged } = useUser();
    const { toast } = useToaster();
    const { isConfigUploaded, isValidating } = useFrameConfigValidator();

    const [loadedConfig, setLoadedConfig] = React.useState<Config>();
    const [version, setVersion] = React.useState<Version>();
    const { entities: configs, isQuerying } = useGet<FrameConfigModel>(FrameConfigApi.api, {
        onSuccess: result => {
            const defaultVersion = EntityHelper.getLatest(result.value ?? []);
            if (defaultVersion) {
                setVersion(defaultVersion.version);
            }
        },
        trigger: isLogged,
    });
    const { isLoading: isImporting } = useDigitalImport<(r: typeof React) => Config>(
        `${FrameConfigApi.api}/version/${version}`,
        {
            trigger: Boolean(version),
            onError: () =>
                toast(
                    {
                        key: 'pages-app:errors.noFrameValidation.invalid',
                        interpolation: { version },
                    },
                    'error'
                ),
            onSuccess: (result: (r: typeof React) => Config) => {
                const config = result(React);
                setLoadedConfig(config);
            },
        }
    );

    React.useEffect(() => console.log(version, loadedConfig), [version, loadedConfig]);

    const isLoading = React.useMemo(() => isQuerying || isImporting, [isQuerying, isImporting]);

    return (
        <FrameConfigContext.Provider
            value={{
                isConfigUploaded,
                loadedConfig,
                loadConfig: setVersion,
                configs: configs ?? [],
                isLoading,
                isValidating: isValidating || isConfigUploaded === undefined,
            }}
        >
            {children}
        </FrameConfigContext.Provider>
    );
}
