import { expect, test } from 'vitest';
import ClassName from './ClassName';

test('ClassName.resolve(): With Classes and props, should return the correct className', () => {
    const base = 'SdButton';
    const props = {
        className: 'custom-class',
        loading: true,
        disabled: false,
        selected: true,
        fullwidth: false,
        onClick: () => void 0,
    };
    const result = ClassName.resolve(base, props);
    expect(result).toBe('SdButton custom-class SdButton-loading SdButton-selected SdButton-action');
});

test('ClassName.resolve(): With variant, should return the correct className', () => {
    const base = 'SdButton';
    const props = { variant: 'secondary' };
    const result = ClassName.resolve(base, props);
    expect(result).toBe('SdButton SdButton-variant-secondary');
});

test('ClassName.resolve(): With color, should return the correct className', () => {
    const base = 'SdButton';
    const props = { color: 'primary' };
    const result = ClassName.resolve(base, props);
    expect(result).toBe('SdButton SdButton-color-primary');
});

test('ClassName.resolve(): With undefined props, should return the correct className', () => {
    const base = 'SdButton';
    const result = ClassName.resolve(base, undefined);
    expect(result).toBe('SdButton');
});
