import { queryClient } from '@/api';

export default class ViewApi {
    public static endpoint = 'view';

    public static async invalidateQuery() {
        await queryClient.invalidateQueries({
            predicate: query => query.queryKey[0] === ViewApi.endpoint,
        });
    }

    public static generateCreatePayload() {
        return {
            body: {
                type: 0,
                title: 'xxxx-xxxx-xxxx-xxxx'.replace(/[xy]/g, c => {
                    const r = (Math.random() * 16) | 0;
                    const v = c === 'x' ? r : (r & 0x3) | 0x8;
                    return v.toString(16);
                }),
            },
        };
    }
}
