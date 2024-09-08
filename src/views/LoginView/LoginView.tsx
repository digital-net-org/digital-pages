import React from 'react';
import { SdForm, SdLogo } from '@/digital-ui';
import './styles.css';
import useLogin from './useLogin';

export default function LoginView() {
    const login = useLogin();

    return (
        <div className="LoginView">
            <div className="LoginView-form">
                <SdLogo />
                <SdForm
                    {...login}
                    inputFields={[{ name: 'login' }, { name: 'password', type: 'password' as const }].map(
                        f => ({
                            ...f,
                            defaultValue: '',
                            required: true,
                            fullwidth: true,
                        }),
                    )}
                />
            </div>
        </div>
    );
}
