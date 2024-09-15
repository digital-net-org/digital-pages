import React from 'react';
import { SdButton, SdLoader, SdPopOver, type SdPopOverProps } from '@/digital-ui';
import './styles.css';

interface MenuAction {
    label: React.ReactNode;
    callback: () => void;
    direction?: 'left' | 'right';
}

interface LayoutMenuProps {
    icon: React.ReactNode;
    actions: MenuAction[];
    label?: string;
    loading?: boolean;
    direction?: SdPopOverProps['direction'];
}

export default function LayoutMenu({ actions, icon, label, loading, direction = 'left' }: LayoutMenuProps) {
    const buttonRef = React.useRef<HTMLButtonElement>(null);
    const menuRef = React.useRef<HTMLDivElement>(null);

    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const handleMenu = () => setIsMenuOpen(!isMenuOpen);

    return loading ? (
        <SdLoader size="small" />
    ) : (
        <React.Fragment>
            <SdButton ref={buttonRef} variant="icon" onClick={handleMenu} selected={isMenuOpen}>
                {direction === 'right' ? icon : null}
                {isMenuOpen && label ? <span>{label}</span> : null}
                {direction === 'left' ? icon : null}
            </SdButton>
            <SdPopOver
                anchor={buttonRef.current}
                open={isMenuOpen}
                onClose={handleMenu}
                direction={direction}
                includeAnchor>
                <div ref={menuRef} className="Layout-menu-content">
                    {actions.map((props, index) => (
                        <SdButton
                            key={index}
                            variant="text"
                            onClick={() => {
                                props.callback();
                                handleMenu();
                            }}>
                            {props.label}
                        </SdButton>
                    ))}
                </div>
            </SdPopOver>
        </React.Fragment>
    );
}
