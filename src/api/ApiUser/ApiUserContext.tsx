import React, { type PropsWithChildren } from 'react';
import { LocalStorage } from '@safari-digital/core';
import { Jwt } from '../utils/Jwt';

export interface StoredUser {
    id?: string;
    role?: number;
    token?: string;
}

export interface UserContextProps extends StoredUser {
    update: (user: StoredUser) => void;
    remove: () => void;
    isLogged: () => boolean;
    isExpired: () => boolean;
}

const defaultValue = {
    update: () => void 0,
    remove: () => void 0,
    isLogged: () => false,
    isExpired: () => false,
};

export const UserContext = React.createContext<UserContextProps>(defaultValue);

export default function ApiUserProvider(props: PropsWithChildren) {
    const [value, setValue] = React.useState(LocalStorage.get<StoredUser>(APP_LS_KEY_USER) ?? {});

    React.useEffect(() => {
        LocalStorage.onSet<StoredUser>(APP_LS_KEY_USER, user => setValue(user ?? {}));
        LocalStorage.onRemove(APP_LS_KEY_USER, () => setValue({}));
        return () => LocalStorage.clearListeners(APP_LS_KEY_USER);
    }, []);

    const isLogged = () =>
        value.token !== undefined && value.token !== null && value.id !== undefined && value.id !== null;

    const isExpired = () => Jwt.isExpired(value.token ?? '');

    return (
        <UserContext.Provider
            {...props}
            value={{
                ...value,
                update: (user: StoredUser) => LocalStorage.set(APP_LS_KEY_USER, user),
                remove: () => LocalStorage.remove(APP_LS_KEY_USER),
                isLogged,
                isExpired,
            }}
        />
    );
}
