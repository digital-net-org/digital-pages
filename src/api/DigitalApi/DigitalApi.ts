import axios, { type AxiosRequestConfig } from 'axios';

export type DigitalRequestConfig = Omit<AxiosRequestConfig, 'url' | 'baseURL'>;

export default class DigitalApi {
    private static baseUrl = DIGITAL_API_URL;
    private static baseConfig = {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        withCredentials: true,
    };

    public static instance = axios.create({
        baseURL: DigitalApi.baseUrl,
        ...DigitalApi.baseConfig,
    });

    public static onError(onRetry: (error: any) => Promise<boolean>) {
        DigitalApi.instance.interceptors.response.use(
            response => response,
            async error => {
                const originalRequest = error.config;
                if (error.response?.status !== 401) {
                    return Promise.reject(error);
                }
                if (!originalRequest._retry) {
                    originalRequest._retry = true;
                    return (await onRetry(error))
                        ? DigitalApi.instance(originalRequest)
                        : Promise.reject(error);
                }
                return Promise.reject(error);
            },
        );
    }

    public static async query<T>(url: string, config: DigitalRequestConfig = {}) {
        return await DigitalApi.instance.get<T>(url, config);
    }

    public static async mutate<T>(url: string, data: any = {}, config: DigitalRequestConfig = {}) {
        return await DigitalApi.instance.request<T>({
            method: 'POST',
            ...config,
            url,
            data,
        });
    }
}
