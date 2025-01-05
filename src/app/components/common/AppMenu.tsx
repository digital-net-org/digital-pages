import React from 'react';
import { Box, Button, Loader, PopOver, type PopOverProps } from '@digital-net/react-digital-ui';
import { useClassName } from '@digital-net/react-digital';
import './AppMenu.styles.css';

interface MenuAction {
    label: React.ReactNode;
    callback?: () => void;
    selected?: boolean;
}

interface AppMenuProps {
    icon: React.ReactNode;
    actions: MenuAction[];
    label?: string;
    loading?: boolean;
    direction?: PopOverProps['direction'];
}

export default function AppMenu({ actions, icon, label, loading, direction = 'left' }: AppMenuProps) {
    const className = useClassName({ direction }, 'App-menu');
    const buttonRef = React.useRef<HTMLButtonElement>(null);
    const menuRef = React.useRef<HTMLDivElement>(null);

    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const handleMenu = () => setIsMenuOpen(!isMenuOpen);

    return loading
        ? (
                <Loader size="small" />
            )
        : (
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
                        includeAnchor
                    >
                        <Box ref={menuRef} className={className}>
                            {actions.map((props, index) =>
                                props.callback === undefined
                                    ? (
                                            props.label
                                        )
                                    : (
                                            <Button
                                                key={index}
                                                variant="text"
                                                selected={props.selected}
                                                onClick={() => {
                                                    if (props.selected) return;
                                                    props.callback?.();
                                                    handleMenu();
                                                }}
                                            >
                                                {props.label}
                                            </Button>
                                        ),
                            )}
                        </Box>
                    </PopOver>
                </React.Fragment>
            );
}
