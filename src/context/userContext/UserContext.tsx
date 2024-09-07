import React, { type PropsWithChildren } from 'react';
import { useLocalStorage } from '@safari-node/use-hooks';

const defaultValue = {
    id: null as string | null,
    role: 0,
    token: null as string | null,
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
    const stored = useLocalStorage<StoredUser>(APP_LS_KEY_USER);
    const [user, setUser] = React.useState(stored.value ?? defaultValue);

    const isLogged = user.id !== null && user.token !== null;
    const isTokenExpired = Date.now() >= user.exp * 1000;

    const handleSetUser = React.useCallback(
        (user: StoredUser) => {
            setUser(user);
            stored.update(user);
        },
        [stored],
    );

    return (
        <UserContext.Provider {...props} value={{ user, setUser: handleSetUser, isLogged, isTokenExpired }} />
    );
}
