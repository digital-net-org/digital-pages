import { LocalStorage } from '@safari-node/use-hooks';

export interface StoredToken {
    id?: string;
    role?: number;
    token?: string;
    exp?: number;
}

export interface StoredUser extends StoredToken {
    isLogged: () => boolean;
    isExpired: () => boolean;
}

export default class ApiUser {
    public static get(): StoredUser {
        const value = LocalStorage.get<StoredToken>(APP_LS_KEY_USER);
        const isLogged = () => value !== null;
        const isExpired = () => isLogged() && (value?.exp ? Date.now() >= value.exp * 1000 : false);
        return { ...value, isLogged, isExpired };
    }

    public static update({ id, role, token, exp }: StoredToken) {
        LocalStorage.set(APP_LS_KEY_USER, { id, role, token, exp });
    }

    public static remove() {
        LocalStorage.remove(APP_LS_KEY_USER);
    }
}
