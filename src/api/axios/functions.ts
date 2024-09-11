import { type AxiosRequestConfig } from 'axios';
import axiosInstance from './instance';

export type RequestConfig = Omit<AxiosRequestConfig, 'url' | 'baseURL'>;

export async function query<T>(url: string, config: RequestConfig = {}) {
    return await axiosInstance.get<T>(url, { ...config });
}

export async function mutate<T>(url: string, data: any = {}, config: RequestConfig = {}) {
    return await axiosInstance.request<T>({
        method: 'POST',
        ...config,
        url,
        data,
    });
}
