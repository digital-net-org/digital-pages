import { type AppAlert, Localization, useDigitalApp } from '@digital-lib/react-digital';
import { useFrameConfig } from '@/editor';

export function useAppAlerts(): Array<AppAlert> {
    const { openAppSettings } = useDigitalApp();
    const { isConfigUploaded, isValidating } = useFrameConfig();

    return [
        ...(!isValidating && isConfigUploaded
            ? []
            : [
                  {
                      key: 'no-frame-config',
                      title: Localization.translate('pages-app:errors.noFrameValidation.noFrame'),
                      message: Localization.translate('pages-app:errors.noFrameValidation.action'),
                      onClick: () => openAppSettings('frame'),
                  },
              ]),
    ];
}
