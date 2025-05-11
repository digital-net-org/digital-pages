import { DigitalClient } from '@digital-lib/react-digital-client';

export class FrameConfigApi {
    public static api = `${PAGES_API_URL}/frame/config`;
    public static testApi = `${this.api}/test`;

    public static InvalidateApi() {
        for (const api of [this.api, this.testApi]) {
            DigitalClient.invalidate(api);
        }
    }
}
