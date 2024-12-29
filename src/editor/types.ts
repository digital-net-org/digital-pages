import type { ValueOf } from '@safari-digital/core';
import { type Icon } from '@safari-digital/digital-ui';
import type React from 'react';
import type { Entity, ResultMessage } from '@/models';
import type { CrudApiState } from '@/api';
import type useEditor from './useEditor';

export interface Tool {
    key: string;
    icon: ValueOf<typeof Icon>;
    render: React.ReactNode;
}

export interface Action<T extends Entity = any> {
    key: string;
    icon: ValueOf<typeof Icon>;
    onClick: (model: T, api: CrudApiState<T>) => void;
}

export interface EditorConfiguration<T extends Entity> {
    api: string;
    renderModelName?: (value: T) => string;
    onCreate?: (create: CrudApiState<T>['create']) => void;
    onPatch?: (patch: CrudApiState<T>['patch'], id: string | number) => void;
    onDelete?: () => void;
    onQuery?: (data: T) => T;
    onError?: (errors: ResultMessage[]) => void;
    tools?: Array<Tool>;
    actions?: Array<Action>;
    disabled?: boolean;
}

export interface DefaultEditorConfiguration<T extends Entity>
    extends Omit<EditorConfiguration<T>, 'tools' | 'actions' | 'disabled'> {
    actions: Array<Action>;
    tools: Array<Tool>;
    disabled: boolean;
}

export type EditorState<T extends Entity = any> = ReturnType<typeof useEditor<T>>;
