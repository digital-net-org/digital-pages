import React from 'react';
import { AxiosContext } from './AxiosContext';

export default function useAxios() {
    return React.useContext(AxiosContext);
}
