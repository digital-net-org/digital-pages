import { SdButtonUser, SdLoader } from '@/digital-ui';
import { type Result, type UserModel } from '@/models';
import { useDigitalQuery } from '@/api';

interface UserProps {
    id: string;
    onClick?: (userId: string) => void;
    selected?: boolean;
}

export default function User({ id, ...props }: UserProps) {
    const { isLoading, data } = useDigitalQuery<Result<UserModel>>(`/user/${id}`);
    return isLoading ? <SdLoader size="small" /> : <SdButtonUser {...data?.value} />;
}
