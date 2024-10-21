export const loginForm = ['login', 'password'].map(id => ({
    id,
    default: '',
    required: true,
    fullWidth: true,
    type: id === 'password' ? ('password' as const) : ('text' as const),
}));
