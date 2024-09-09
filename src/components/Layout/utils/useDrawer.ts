import React from 'react';

export default function useDrawer() {
    const [state, setState] = React.useState(false);
    const handleDrawer = () => setState(!state);
    return [state, handleDrawer] as const;
}
