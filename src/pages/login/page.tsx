import React from 'react';
import { t } from 'i18next';
import { useDigitalUser } from '@digital-lib/react-digital-user';
import { Box, Form, useForm } from '@digital-lib/react-digital-ui';
import { Logo } from '@/app';
import { loginForm } from './form';
import './styles.css';

export default function LoginPage() {
    const { login, isLoading } = useDigitalUser();
    const { formBody: body, renderFields } = useForm(loginForm);
    const handleSubmit = () => login({ body });

    return (
        <Box className="LoginView" mb={2}>
            <Box className="LoginView-form" p={3} fullWidth>
                <Logo />
                <Form onSubmit={handleSubmit} loading={isLoading} actionLabel={t('login:form.submit')}>
                    {renderFields()}
                </Form>
            </Box>
        </Box>
    );
}
