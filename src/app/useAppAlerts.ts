import { type AppAlert, Localization } from '@digital-lib/react-digital';
import { useApp } from './useApp';

export function useAppAlerts(): Array<AppAlert> {
    const { isConfigUploaded, openAppSettings } = useApp();

    return [
        ...(isConfigUploaded !== undefined && isConfigUploaded
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
