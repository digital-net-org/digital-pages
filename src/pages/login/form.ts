import { t } from 'i18next';

export const loginForm = ['login', 'password'].map(id => ({
    id,
    default: '',
    required: true,
    fullWidth: true,
    label: t(`login:form.${id}`),
    type: id === 'password' ? ('password' as const) : ('text' as const),
}));
