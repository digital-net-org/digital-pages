import React from 'react';
import { UserContext, type UserContextProps } from './UserContext';

export default function useUserContext(): UserContextProps {
    return React.useContext(UserContext);
}
