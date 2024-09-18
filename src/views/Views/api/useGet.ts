import type { QueryResult, ViewModel } from '@/models';
import { useDigitalQuery } from '@/api';

export default function useGet() {
    const { data, isLoading: isQuerying } = useDigitalQuery<QueryResult<ViewModel>>('view');
    return {
        views: data?.value ?? [],
        isQuerying,
    };
}
