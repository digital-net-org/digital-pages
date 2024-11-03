import { useApiUser } from '@/api';
import { Logo } from '@/app';
import { Box, Form, useForm } from '@safari-digital/digital-ui';
import { t } from 'i18next';
import React from 'react';
import { loginForm } from './form';
import './styles.css';

export default function LoginPage() {
    const { login, loading } = useApiUser();
    const { formBody: body, renderFields } = useForm(loginForm);

    const handleSubmit = () => login({ body });

    return (
        <Box className="LoginView" mb={2}>
            <Box className="LoginView-form" p={3} fullWidth>
                <Logo />
                <Form onSubmit={handleSubmit} loading={loading} actionLabel={t('login:form.submit')}>
                    {renderFields()}
                </Form>
            </Box>
        </Box>
    );
}
