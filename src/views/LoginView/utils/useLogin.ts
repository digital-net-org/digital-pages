import { useDigitalMutation } from '@/api';
import { type Result } from '@/models';
import { useUserContext } from '@/context';
import { Jwt } from '@/utils';

export default function useLogin() {
    const { setUser } = useUserContext();
    const { mutate, isPending } = useDigitalMutation<Result<{ token: string }>>('/authentication/login', {
        withCredentials: true,
        onSuccess: ({ value }) => {
            const decoded = Jwt.decode(value.token);
            if (!decoded) return;
            setUser({
                ...decoded.content,
                token: value.token,
                exp: decoded.exp,
            });
        },
    });

    return {
        onSubmit: (body: Record<string, any>) => mutate({ body }),
        loading: isPending,
    };
}
