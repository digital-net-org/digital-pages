import React from 'react';
import { ThemeContext } from './ThemeContext';

export default function useThemeContext() {
    return React.useContext(ThemeContext);
}
