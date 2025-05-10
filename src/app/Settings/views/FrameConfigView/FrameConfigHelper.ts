import { DigitalClient } from '@digital-lib/react-digital-client';

export class FrameConfigHelper {
    public static api = `${PAGES_API_URL}/frame/config`;
    public static testApi = `${PAGES_API_URL}/frame/config/test`;

    public static InvalidateApi() {
        for (const api of [this.api, this.testApi]) {
            DigitalClient.invalidate(api);
        }
    }
}
