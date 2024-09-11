import { LocalStorage } from '@safari-node/use-hooks';

export interface StoredToken {
    id?: string;
    role?: number;
    token?: string;
}

export default class StoredUser {
    public static get(): StoredToken {
        return LocalStorage.get<StoredToken>(APP_LS_KEY_USER) ?? {};
    }

    public static update({ id, role, token }: StoredToken) {
        LocalStorage.set(APP_LS_KEY_USER, { id, role, token });
    }

    public static remove() {
        LocalStorage.remove(APP_LS_KEY_USER);
    }
}
