import React from 'react';
import { Puck } from '@measured/puck';
import { defaultPuckConfig, defaultPuckData } from '@/puck';
import FrameEditor from './components/FrameEditor';
import './styles.css';

export default function FramePage() {
    return (
        <Puck data={defaultPuckData} config={defaultPuckConfig}>
            <FrameEditor />
        </Puck>
    );
}
