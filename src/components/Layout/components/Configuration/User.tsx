import React, { type PropsWithChildren } from 'react';
import { SdAvatar, SdButton, SdLoader, SdPopOver } from '@/digital-ui';
import { type ApiUser } from '@/api';

interface Props extends ApiUser {
    username: string | undefined;
}

export default function User({ username, loading, children }: Props & PropsWithChildren) {
    const buttonRef = React.useRef<HTMLButtonElement>(null);
    const menuRef = React.useRef<HTMLDivElement>(null);

    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const handleMenu = () => setIsMenuOpen(!isMenuOpen);

    React.useLayoutEffect(() => {
        if (!isMenuOpen) return;
        const buttonWidth = buttonRef.current?.getBoundingClientRect().width;
        const menuWidth = menuRef.current?.getBoundingClientRect().width;
        if (buttonWidth && menuWidth) {
            menuRef.current!.style.minWidth = `${buttonWidth + 5}px`;
        }
    }, [isMenuOpen]);

    return loading ? (
        <SdLoader size="small" />
    ) : (
        <React.Fragment>
            <SdButton ref={buttonRef} variant="icon" onClick={handleMenu} selected={isMenuOpen}>
                {isMenuOpen ? <span>{username}</span> : null}
                <SdAvatar size="small" />
            </SdButton>
            <SdPopOver
                anchor={buttonRef.current}
                open={isMenuOpen}
                onClose={handleMenu}
                direction="right"
                includeAnchor>
                <div ref={menuRef} className="Layout-user-menu">
                    {children}
                </div>
            </SdPopOver>
        </React.Fragment>
    );
}
