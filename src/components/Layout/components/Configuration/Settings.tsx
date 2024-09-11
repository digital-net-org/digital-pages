import { SdButton, SdIcon } from '@/digital-ui';

interface SettingsProps {
    onClick?: () => void;
    selected?: boolean;
}

export default function Settings(props: SettingsProps) {
    return (
        <SdButton variant="icon" {...props}>
            <SdIcon.GearIcon variant="filled" />
        </SdButton>
    );
}
