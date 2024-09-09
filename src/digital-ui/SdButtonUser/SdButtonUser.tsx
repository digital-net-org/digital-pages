import React from 'react';
import { useClassName } from '@/utils';
import { SdButton } from '../SdButton';
import { SdAvatar } from '../SdAvatar';
import './styles.css';

export interface SdButtonUserProps {
    size?: 'small' | 'medium' | 'large';
    onClick?: (userId: string) => void;
    username?: string;
    id?: string;
}

export default function SdButtonUser({ size = 'small', onClick, id, username }: SdButtonUserProps) {
    const handleClick = () => onClick?.(id ?? '');
    const className = useClassName({ size }, 'SdButtonUser');

    return (
        <div className={className}>
            <SdButton variant="icon" onClick={handleClick}>
                {username ? <span>{username}</span> : null}
                <SdAvatar size={size} />
            </SdButton>
        </div>
    );
}
