import type { ValueOf } from '@safari-digital/core';
import { type Icon } from '@safari-digital/digital-ui';
import type React from 'react';
import type useEditor from './useEditor';
import type { ResultMessage } from '@/models';
import type { CrudApiState } from '@/api';

export interface Tool {
    key: string;
    icon: ValueOf<typeof Icon>;
    renderTool: React.ReactNode;
}

export interface Action<T = any, TRaw = T> {
    key: string;
    icon: ValueOf<typeof Icon>;
    onClick: (model: T, api: CrudApiState<T, TRaw>) => void;
}

export interface EditorConfiguration<T, TRaw = T> {
    api: string;
    renderPreview?: (value: T) => React.ReactNode;
    renderName?: (value: T) => string;
    onCreate?: (create: CrudApiState<T, TRaw>['create']) => void;
    onPatch?: (patch: CrudApiState<T, TRaw>['patch'], id: string | number) => void;
    onDelete?: () => void;
    onQuery?: (data: TRaw) => T;
    onError?: (errors: ResultMessage[]) => void;
    tools?: Array<Tool>;
    actions?: Array<Action>;
    disabled?: boolean;
}

export interface DefaultEditorConfiguration<T, TRaw = T>
    extends Omit<EditorConfiguration<T, TRaw>, 'tools' | 'actions' | 'disabled'> {
    actions: Array<Action>;
    tools: Array<Tool>;
    disabled: boolean;
}

export type EditorState<T = any, TRaw = T> = ReturnType<typeof useEditor<T, TRaw>>;