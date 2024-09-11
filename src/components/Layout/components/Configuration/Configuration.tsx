import React from 'react';
import { useApiUser, useDigitalQuery } from '@/api';
import { SdButton } from '@/digital-ui';
import type { Result, UserModel } from '@/models';
import User from './User';

export default function Configuration() {
    const apiUser = useApiUser();
    const { isLoading: userDataLoading, data } = useDigitalQuery<Result<UserModel>>(`/user/${apiUser.id}`);

    return (
        <div className="Layout-config">
            <User {...apiUser} username={data?.value.username}>
                <SdButton variant="text" onClick={apiUser.logout} loading={apiUser.loading}>
                    Logout
                </SdButton>
            </User>
            {/*<Theme />*/}
            {/*<Settings />*/}
        </div>
    );
}
