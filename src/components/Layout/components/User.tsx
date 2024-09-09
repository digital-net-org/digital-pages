import { SdButtonUser, SdLoader } from '@/digital-ui';
import { type Result, type UserModel } from '@/models';
import { useDigitalMutation, useDigitalQuery } from '@/api';

interface UserProps {
    id: string;
    onClick?: (userId: string) => void;
    selected?: boolean;
}

export default function User({ id, ...props }: UserProps) {
    const { isLoading: userDataLoading, data } = useDigitalQuery<Result<UserModel>>(`/user/${id}`);
    const { isPending: logoutLoading } = useDigitalMutation('/authentication/logout');

    return userDataLoading ? <SdLoader size="small" /> : <SdButtonUser {...data?.value} />;
}
