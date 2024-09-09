import React, { type PropsWithChildren } from 'react';
import { useLocalStorage } from '@safari-node/use-hooks';

const defaultValue = {
    id: '',
    role: 0,
    token: '',
    exp: 0,
};

export type StoredUser = typeof defaultValue;

export interface UserContextProps {
    user: typeof defaultValue;
    setUser: (user: StoredUser) => void;
    isLogged: boolean;
    isTokenExpired: boolean;
}

export const UserContext = React.createContext<UserContextProps>({
    user: defaultValue,
    setUser: () => void 0,
    isLogged: false,
    isTokenExpired: false,
});

export default function UserProvider(props: PropsWithChildren) {
    const { value, update } = useLocalStorage<StoredUser>(APP_LS_KEY_USER);

    const isLogged = value ? value.id !== '' && value.token !== '' : false;
    const isTokenExpired = value ? Date.now() >= value.exp * 1000 : false;
    const handleSetUser = React.useCallback((user: StoredUser) => update(user), [update]);

    return (
        <UserContext.Provider
            {...props}
            value={{
                user: value ?? defaultValue,
                setUser: handleSetUser,
                isLogged,
                isTokenExpired,
            }}
        />
    );
}
