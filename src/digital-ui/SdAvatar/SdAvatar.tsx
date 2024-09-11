import React, { type PropsWithChildren } from 'react';
import { useClassName, useImageSrc, useProps } from '@/utils';
import { SdIcon } from '../SdIcon';
import './styles.css';

export interface SdAvatarProps {
    src?: string;
    color?: 'primary' | 'text' | 'disabled';
    size?: 'small' | 'medium' | 'large';
    className?: string;
    onClick?: () => void;
    fullwidth?: boolean;
}

export default function SdAvatar({
    src,
    color = 'text',
    size = 'small',
    fullwidth = false,
    ...props
}: SdAvatarProps) {
    const classNames = useClassName({ color, size, fullwidth, ...props }, 'SdAvatar');
    const svgProps = React.useMemo(() => ({ color, size, fullwidth }), [color, size, fullwidth]);
    const { isValid } = useImageSrc(src);

    return (
        <AvatarContainer className={classNames} color={color} size={size} fullwidth={fullwidth} {...props}>
            {src && isValid ? (
                <div className="SdAvatar-container">
                    <img src={src} alt="" />
                    <SdIcon.CircleIcon {...svgProps} />
                </div>
            ) : (
                <SdIcon.AccountIcon {...svgProps} />
            )}
        </AvatarContainer>
    );
}

function AvatarContainer({ children, ...props }: SdAvatarProps & PropsWithChildren) {
    const { mapProps } = useProps(props);
    return mapProps(<div>{children}</div>);
}
