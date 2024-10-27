import React from 'react';
import { LocalStorage } from '@safari-digital/core';
import { type StoredUser } from '@/api';
import type { Result } from '@/models';
import useAxios from './useAxios';
import { UserContext } from '../ApiUser/ApiUserContext';
import { Jwt } from '../utils/Jwt';

export default function AxiosInterceptor() {
    const axiosInstance = useAxios();
    const { update, remove } = React.useContext(UserContext);

    React.useEffect(() => {
        const onRequest = axiosInstance.interceptors.request.use(
            async config => {
                const user = LocalStorage.get<StoredUser>(APP_LS_KEY_USER);
                if (user?.token) config.headers['Authorization'] = `Bearer ${user.token}`;
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
                const isRefreshing = originalRequest.url === '/authentication/refresh';

                if (isRefreshing) {
                    remove();
                    return Promise.reject(error);
                }

                if (!isUnauthorized || originalRequest._retry === true) {
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
                return axiosInstance.request(originalRequest);
            },
        );

        return () => {
            axiosInstance.interceptors.request.eject(onRequest);
            axiosInstance.interceptors.response.eject(onResponse);
        };
    }, [axiosInstance, remove, update]);

    return null;
}
