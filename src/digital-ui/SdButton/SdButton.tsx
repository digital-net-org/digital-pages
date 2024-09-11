import React from 'react';
import { useClassName, useProps } from '@/utils';
import SdLoader from '../SdLoader/SdLoader';
import './styles.css';

export interface SdButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
    variant?: SnButtonVariant | undefined;
    loading?: boolean | undefined;
    disabled?: boolean | undefined;
    fullwidth?: boolean | undefined;
    selected?: boolean | undefined;
    href?: string | undefined;
}

export type SnButtonVariant = 'primary' | 'secondary' | 'text' | 'icon';

const SdButton = React.forwardRef<HTMLElement, SdButtonProps>(
    ({ children, variant = 'primary', ...props }, ref) => {
        const className = useClassName({ ...props, variant }, 'SdButton');
        const { mapProps } = useProps({ ...props, variant, className });

        return mapProps(
            React.createElement(props.href ? 'a' : 'button', {
                ref,
                children: (
                    <React.Fragment>
                        {props.loading && (
                            <SdLoader color={props.disabled ? 'disabled' : 'text'} size="small" />
                        )}
                        <span className="SdButton-content">{children}</span>
                    </React.Fragment>
                ),
            }),
        );
    },
);

export default SdButton;
