import React from 'react';
import { type SdFormProps } from './SdForm';
import type { FormFieldValue } from './InputField';

export function useFormState(fields: SdFormProps['inputFields']) {
    const defaultState = React.useMemo(
        () =>
            fields.reduce(
                (acc, field) => ({
                    ...acc,
                    [field.name]: field.defaultValue,
                }),
                {},
            ),
        [fields],
    );

    const [body, setBody] = React.useState(defaultState);

    const handleSetState = (name: string, value: FormFieldValue) =>
        setBody(prevState => ({ ...prevState, [name]: value }));

    return [body, handleSetState] as const;
}
