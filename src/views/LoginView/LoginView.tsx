import React from 'react';
import { SdForm, SdLogo } from '@/digital-ui';
import useLogin from './utils/useLogin';
import { loginForm } from './utils/loginForm';
import './styles.css';

export default function LoginView() {
    const login = useLogin();

    return (
        <div className="LoginView">
            <div className="LoginView-form">
                <SdLogo />
                <SdForm {...login} inputFields={loginForm} />
            </div>
        </div>
    );
}
