import React from 'react';
import { type Entity } from '@/models';
import IndexedDbStore from './IndexedDbStore';

export default function useIndexedDb<T extends Entity>(dbName: string, key: string, schema: object) {
    const [isLoading, setIsLoading] = React.useState(false);
    const [indexDb, setIndexDb] = React.useState<IndexedDbStore<T> | null>(null);

    React.useEffect(() => {
        if (isLoading || isInitiated) {
            return;
        }

        setIsLoading(true);
        db.init()
            .then(() => {
                setIndexDb(db);
                setIsLoading(false);
            })
            .catch(() => setIsLoading(false));
    }, [dbName, key, schema, isLoading, indexDb]);

    const set = React.useCallback(
        (data: T) => {
            if (!indexDb?.save) {
                return;
            }
            setIsLoading(true);
            indexDb
                .save(data)
                .then(() => setIsLoading(false))
                .catch(() => setIsLoading(false));
        },
        [indexDb],
    );

    return {
        isLoading,
        set,
    };
}
