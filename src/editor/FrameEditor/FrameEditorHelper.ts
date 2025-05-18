import { DigitalClient } from '@digital-lib/react-digital-client';

export class FrameEditorHelper {
    public static store = 'frame';
    public static apiUrl = `${PAGES_API_URL}/${this.store}`;
    public static className = 'Frame-Editor';

    public static invalidateGetAll() {
        DigitalClient.invalidate(FrameEditorHelper.apiUrl);
    }

    public static invalidateGetById(id: string) {
        DigitalClient.invalidate(`${FrameEditorHelper.apiUrl}/${id}`);
    }
}
