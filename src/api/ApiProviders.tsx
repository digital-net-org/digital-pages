import { type PropsWithChildren } from 'react';
import { AxiosInterceptor, AxiosProvider } from './axios';
import { RtkProvider } from './ReactQuery';
import { ApiUserProvider } from './ApiUser';

export default function (props: PropsWithChildren) {
    return (
        <ApiUserProvider>
            <RtkProvider>
                <AxiosProvider>
                    <AxiosInterceptor />
                    {props.children}
                </AxiosProvider>
            </RtkProvider>
        </ApiUserProvider>
    );
}
