import React from 'react';
import { Box, Button, Loader, PopOver, type PopOverProps } from '@safari-digital/digital-ui';
import './styles.css';

interface MenuAction {
    label: React.ReactNode;
    callback: () => void;
    selected?: boolean;
}

interface LayoutMenuProps {
    icon: React.ReactNode;
    actions: MenuAction[];
    label?: string;
    loading?: boolean;
    direction?: PopOverProps['direction'];
}

export default function LayoutMenu({ actions, icon, label, loading, direction = 'left' }: LayoutMenuProps) {
    const buttonRef = React.useRef<HTMLButtonElement>(null);
    const menuRef = React.useRef<HTMLDivElement>(null);

    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const handleMenu = () => setIsMenuOpen(!isMenuOpen);

    return loading ? (
        <Loader size="small" />
    ) : (
        <React.Fragment>
            <Button ref={buttonRef} variant="icon" onClick={handleMenu} selected={isMenuOpen}>
                {direction === 'right' ? icon : null}
                {isMenuOpen && label ? <span>{label}</span> : null}
                {direction === 'left' ? icon : null}
            </Button>
            <PopOver
                anchor={buttonRef.current}
                open={isMenuOpen}
                onClose={handleMenu}
                direction={direction}
                includeAnchor>
                <Box ref={menuRef} className="Layout-menu-content">
                    {actions.map((props, index) => (
                        <Button
                            key={index}
                            variant="text"
                            selected={props.selected}
                            onClick={() => {
                                if (props.selected) return;
                                props.callback();
                                handleMenu();
                            }}>
                            {props.label}
                        </Button>
                    ))}
                </Box>
            </PopOver>
        </React.Fragment>
    );
}
