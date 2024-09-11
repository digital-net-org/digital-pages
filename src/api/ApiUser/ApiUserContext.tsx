import React, { type PropsWithChildren } from 'react';
import StoredUser, { type StoredToken } from './StoredUser';
import { Jwt } from '@/utils';

export interface UserContextProps extends StoredToken {
    update: (user: StoredToken) => void;
    remove: () => void;
    isLogged: () => boolean;
    isExpired: () => boolean;
}

const defaultValue = {
    ...StoredUser.get(),
    update: () => void 0,
    remove: () => void 0,
    isLogged: () => false,
    isExpired: () => false,
};

export const UserContext = React.createContext<UserContextProps>(defaultValue);

export default function ApiUserProvider(props: PropsWithChildren) {
    const [value, setValue] = React.useState(StoredUser.get());

    const isLogged = () =>
        value.token !== undefined && value.token !== null && value.id !== undefined && value.id !== null;
    const isExpired = () => Jwt.isExpired(value.token ?? '');

    const handleSetUser = (user: StoredToken) => {
        console.log('handleSetUser', user);
        setValue(user);
        StoredUser.update(user);
    };

    const handleRemoveUser = () => {
        setValue({});
        StoredUser.remove();
    };

    return (
        <UserContext.Provider
            {...props}
            value={{
                ...value,
                update: handleSetUser,
                remove: handleRemoveUser,
                isLogged,
                isExpired,
            }}
        />
    );
}
