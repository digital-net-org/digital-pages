import axios from 'axios';
import type { Result } from '@/models';
import { Jwt } from '@/utils';
import ApiUser from '../ApiUser';

const axiosClient = axios.create({
    baseURL: DIGITAL_API_URL,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
});

axiosClient.interceptors.request.use(
    config => {
        const { token } = ApiUser.get();
        if (token) config.headers['Authorization'] = token;
        return config;
    },
    error => {
        return Promise.reject(error);
    },
);

axiosClient.interceptors.response.use(
    response => response,
    async error => {
        const { isExpired, isLogged } = ApiUser.get();
        const originalRequest = error.config;
        const isUnauthorized = error.response?.status === 401;
        const hasBeenRetried = originalRequest._retry === true;

        if (!isUnauthorized || (isLogged() && !isExpired()) || !isLogged() || hasBeenRetried) {
            return Promise.reject(error);
        }

        originalRequest._retry = true;
        try {
            const { status, data } = await axios.request<Result<string>>({
                method: 'POST',
                url: '/authentication/refresh',
                withCredentials: true,
            });
            if (status !== 200 || !data.value) {
                throw new Error('INTERCEPTOR: UNAUTHORIZED');
            }
            const token = { ...Jwt.decode(data.value), value: data.value };
            ApiUser.update({
                ...token.content,
                token: token.value,
                exp: token.exp,
            });
            return axiosClient(originalRequest);
        } catch (error) {
            console.log(error);
            ApiUser.remove();
            return Promise.reject(error);
        }
    },
);

export default axiosClient;
