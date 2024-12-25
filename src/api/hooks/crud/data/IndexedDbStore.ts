import {type Entity} from '@/models';

export default class IndexedDbStore<T extends Entity> {
    private readonly _dbName: string;
    private readonly _key: string;
    private readonly _schema: object;

    private _version = 1;

    constructor(dbName: string, key: string, schema: object) {
        this._dbName = dbName;
        this._key = key;
        this._schema = schema;
    }

    public init(): Promise<void> {
        return this.accessDatabase({
            onupgradeneeded: db => {
                if (!db.objectStoreNames.contains(this._key)) {
                    return;
                }

                console.log(`useCrud: creating object store ${this._key}`);
                const store = db.createObjectStore(this._key, { keyPath: this._key });
                Object.keys(this._schema).forEach(key =>
                    store.createIndex(key, key, { unique: key === 'id' }),
                );
            },
            onsuccess: (db, _, resolve) => {
                this._version = db.version;
                resolve();
            },
            onerror: (_, e) => {
                throw new Error(`useCrud: error opening database: ${e}`);
            },
        });
    }

    public get = (id: string | number, onProcessed: (data: T | undefined) => void) => {
        return this.accessDatabase({
            onsuccess: (db, _, resolve) => {
                const transaction = db.transaction(this._key, 'readonly');
                const store = transaction.objectStore(this._key);
                const result = store.get(id);
                result.onsuccess = () => onProcessed(result?.result);
                result.onerror = () => onProcessed(undefined);
                resolve();
            },
            onerror: (_, e) => {
                throw new Error(`useCrud: error getting data: ${e}`);
            },
        });
    };

    public save = (data: T) => {
        return this.accessDatabase({
            onsuccess: (db, _, resolve) => {
                const transaction = db.transaction(this._key, 'readwrite');
                const store = transaction.objectStore(this._key);
                const result = store.get(data.id);

                result.onsuccess = () => {
                    store.put({ ...(result?.result ?? {}), ...data });
                    resolve();
                };
                result.onerror = () => {
                    store.add(data);
                    resolve();
                };
            },
            onerror: (_, e) => {
                throw new Error(`useCrud: error saving data: ${e}`);
            },
        });
    };

    public delete = (id: string | number) => {
        return this.accessDatabase({
            onsuccess: (db, _, resolve) => {
                const transaction = db.transaction(this._key, 'readwrite');
                const store = transaction.objectStore(this._key);
                store.delete(id);
                resolve();
            },
            onerror: (_, e) => {
                throw new Error(`useCrud: error deleting data: ${e}`);
            },
        });
    };

    private accessDatabase(
        handlers: Partial<
            Record<
                'onerror' | 'onsuccess' | 'onupgradeneeded',
                (db: IDBDatabase, e: Event, resolve: () => void) => void
            >
        >,
    ): Promise<void> {
        return new Promise(resolve => {
            const request = indexedDB.open(this._dbName, this._version);
            Object.entries(handlers).forEach(([key, callback]) => {
                request[key] = (e: Event) => callback(request.result, e, resolve);
            });
        });
    }
}
