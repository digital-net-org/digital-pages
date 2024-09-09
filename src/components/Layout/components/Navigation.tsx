import { SdButton, SdIcon, SdLogo } from '@/digital-ui';

interface NavigationProps {
    onClick: () => void;
}

export default function Navigation(props: NavigationProps) {
    return (
        <div className="Layout-navigation">
            <SdButton variant="icon" {...props}>
                <SdIcon.MenuIcon />
            </SdButton>
            <SdLogo />
        </div>
    );
}
