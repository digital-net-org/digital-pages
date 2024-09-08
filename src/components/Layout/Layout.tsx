import './styles.css';
import React, { type PropsWithChildren } from 'react';

export type LayoutProps = PropsWithChildren;

export default function Layout(props: LayoutProps) {
    return <main className="Page" {...props} />;
}
