import axios, { type AxiosRequestConfig, type InternalAxiosRequestConfig } from 'axios';
import { LocalStorage } from '@safari-node/use-hooks';
import { type Result } from '@/models';
import { type StoredUser } from '@/context';
import { Jwt } from '@/utils';

export type DigitalRequestConfig = Omit<AxiosRequestConfig, 'url' | 'baseURL'>;

export default class DigitalApi {
    public static instance = axios.create({
        baseURL: DIGITAL_API_URL,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    });

    public static onError(onRetry: (callbackError: any) => Promise<string | null>) {
        DigitalApi.instance.interceptors.response.use(
            response => response,
            async error => {
                const originalRequest = error.config;
                if (error.response?.status !== 401) {
                    return Promise.reject(error);
                }
                if (!originalRequest._retry) {
                    originalRequest._retry = true;
                    const token = await onRetry(error);
                    if (!token) return Promise.reject(error);
                    originalRequest.headers.Authorization = `Bearer ${token}`;
                    return DigitalApi.instance(originalRequest);
                }
                return Promise.reject(error);
            },
        );
    }

    public static onRequest(
        onRequest?: (callbackConfig: InternalAxiosRequestConfig) => Promise<InternalAxiosRequestConfig>,
    ) {
        DigitalApi.instance.interceptors.request.use(async config => {
            const bearer = LocalStorage.get<StoredUser>(APP_LS_KEY_USER);
            if (bearer) config.headers.Authorization = `Bearer ${bearer.token}`;

            await onRequest?.(config);
            return config;
        });
    }

    static async query<T>(url: string, config: DigitalRequestConfig = {}) {
        return await DigitalApi.instance.get<T>(url, { ...config });
    }

    public static async mutate<T>(url: string, data: any = {}, config: DigitalRequestConfig = {}) {
        return await DigitalApi.instance.request<T>({
            method: 'POST',
            ...config,
            url,
            data,
        });
    }

    public static async refreshTokens() {
        const { status, data } = await DigitalApi.instance.request<Result<string>>({
            method: 'POST',
            url: '/authentication/refresh',
            withCredentials: true,
        });
        return status !== 200 || !data.value ? null : { ...Jwt.decode(data.value), value: data.value };
    }
}
