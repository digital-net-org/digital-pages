import React from 'react';
import { SdForm, SdLogo } from '@/digital-ui';
import { useApiUser } from '@/api';
import { loginForm } from './utils/loginForm';
import './styles.css';

export default function Login() {
    const { login, loading } = useApiUser();

    return (
        <div className="LoginView">
            <div className="LoginView-form">
                <SdLogo />
                <SdForm onSubmit={body => login({ body })} loading={loading} inputFields={loginForm} />
            </div>
        </div>
    );
}
