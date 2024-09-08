'use client';

import React from 'react';
import './styles.css';

interface DrawerBackgroundProps {
    open: boolean;
    onClose: () => void;
}

export default function DrawerBackground(props: DrawerBackgroundProps) {
    return props.open ? <div className="SdDrawer-background" onClick={props.onClose} /> : null;
}
