import React from 'react';
import type { Result } from '@/models';
import { Jwt } from '@/utils';
import { UserContext } from '../ApiUser/ApiUserContext';
import useAxios from './useAxios';
import { StoredUser } from '@/api';

export default function AxiosInterceptor() {
    const axiosInstance = useAxios();
    const { update, remove } = React.useContext(UserContext);

    React.useEffect(() => {
        const onRequest = axiosInstance.interceptors.request.use(
            async config => {
                const { token } = StoredUser.get();
                if (token) config.headers['Authorization'] = `Bearer ${token}`;
                return config;
            },
            error => {
                return Promise.reject(error);
            },
        );

        const onResponse = axiosInstance.interceptors.response.use(
            response => {
                return response;
            },
            async error => {
                const originalRequest = error.config;
                const isUnauthorized = error.response?.status === 401;
                const hasBeenRetried = originalRequest._retry === true;

                if (!isUnauthorized || hasBeenRetried) {
                    return Promise.reject(error);
                }

                originalRequest._retry = true;
                const { status, data } = await axiosInstance.request<Result<{ token: string }>>({
                    method: 'POST',
                    url: '/authentication/refresh',
                    withCredentials: true,
                });
                if (status !== 200 || !data.value) {
                    remove();
                    return Promise.reject(error);
                }
                const token = { ...Jwt.decode(data.value.token), token: data.value.token };
                update({
                    ...token.content,
                    token: token.token,
                });

                originalRequest.headers['Authorization'] = `Bearer ${token.token}`;
                return axiosInstance(originalRequest);
            },
        );

        return () => {
            axiosInstance.interceptors.request.eject(onRequest);
            axiosInstance.interceptors.response.eject(onResponse);
        };
    }, [axiosInstance, remove, update]);

    return null;
}
