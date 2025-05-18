import { useStoredEntity } from '@digital-lib/react-digital';
import type { FrameModel } from '@/dto';
import { useFrameUrlState } from './useFrameUrlState';
import { FrameEditorHelper } from './FrameEditorHelper';

export function useFrameStore() {
    const { currentFrame } = useFrameUrlState();
    return useStoredEntity<FrameModel>(FrameEditorHelper.store, currentFrame);
}
