import axios from 'axios';

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

    public static async get<T>(url: string, config = {}) {
        return DigitalApi.instance.get<T>(url, config);
    }

    public static async post<T>(url: string, data: any = {}, config = {}) {
        return DigitalApi.instance.post<T>(url, data, config);
    }

    public static async put<T>(url: string, data: any, config = {}) {
        return DigitalApi.instance.put<T>(url, data, config);
    }

    public static async delete<T>(url: string, config = {}) {
        return DigitalApi.instance.delete<T>(url, config);
    }

    public static async patch<T>(url: string, data: any, config = {}) {
        return DigitalApi.instance.patch<T>(url, data, config);
    }
}
