import React, { type PropsWithChildren } from 'react';
import './styles.css';

export type SdHeaderProps = PropsWithChildren;

export default function SdHeader(props: SdHeaderProps) {
    return <header className="SdHeader" {...props} />;
}
