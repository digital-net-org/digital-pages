import type { ValueOf } from '@safari-digital/core';
import { type Icon } from '@safari-digital/digital-ui';
import type React from 'react';
import type { EntityBase, ResultMessage } from '@/models';
import type { CrudApiState } from '@/api';
import type useEditor from './useEditor';

export interface Tool {
    key: string;
    icon: ValueOf<typeof Icon>;
    render: React.ReactNode;
}

export interface Action<T extends EntityBase = any, TRaw = T> {
    key: string;
    icon: ValueOf<typeof Icon>;
    onClick: (model: T, api: CrudApiState<T, TRaw>) => void;
}

export interface EditorConfiguration<T extends EntityBase, TRaw = T> {
    api: string;
    renderModelName?: (value: T) => string;
    onCreate?: (create: CrudApiState<T, TRaw>['create']) => void;
    onPatch?: (patch: CrudApiState<T, TRaw>['patch'], id: string | number) => void;
    onDelete?: () => void;
    onQuery?: (data: TRaw) => T;
    onError?: (errors: ResultMessage[]) => void;
    tools?: Array<Tool>;
    actions?: Array<Action>;
    disabled?: boolean;
}

export interface DefaultEditorConfiguration<T extends EntityBase, TRaw = T>
    extends Omit<EditorConfiguration<T, TRaw>, 'tools' | 'actions' | 'disabled'> {
    actions: Array<Action>;
    tools: Array<Tool>;
    disabled: boolean;
}

export type EditorState<T extends EntityBase = any, TRaw = T> = ReturnType<typeof useEditor<T, TRaw>>;