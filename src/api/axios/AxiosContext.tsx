import React, { type PropsWithChildren } from 'react';
import axios, { type AxiosInstance } from 'axios';

export const axiosInstance = axios.create({
    baseURL: DIGITAL_API_URL,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
    withCredentials: true,
});

export const AxiosContext = React.createContext<AxiosInstance>(axiosInstance);

export default function AxiosProvider(props: PropsWithChildren) {
    return <AxiosContext.Provider value={axiosInstance} {...props} />;
}
