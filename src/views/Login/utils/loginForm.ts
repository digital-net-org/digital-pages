import { type Form } from '@/digital-ui';

export const loginForm: Form = [{ name: 'login' }, { name: 'password', type: 'password' as const }].map(
    f => ({
        ...f,
        defaultValue: '',
        required: true,
        fullwidth: true,
    }),
);
