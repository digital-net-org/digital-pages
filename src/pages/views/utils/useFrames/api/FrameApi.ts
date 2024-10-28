import { queryClient } from '@/api';

export default class FrameApi {
    public static endpoint = 'frame';

    public static async invalidateQuery() {
        await queryClient.invalidateQueries({
            predicate: query => query.queryKey[0] === this.endpoint,
        });
    }

    public static generateCreatePayload() {
        return {
            body: {
                data: '{}',
                name: 'xxxx-xxxx-xxxx-xxxx'.replace(/[xy]/g, c => {
                    const r = (Math.random() * 16) | 0;
                    const v = c === 'x' ? r : (r & 0x3) | 0x8;
                    return v.toString(16);
                }),
            },
        };
    }
}
